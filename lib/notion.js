import { Client } from '@notionhq/client';

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export const getProjects = async () => {
    const databaseId = process.env.NOTION_PROJECTS_DATABASE_ID;
    const response = await notion.databases.query({
        database_id: databaseId,
        // Sort removed to respect Notion's default order
    });
    return response.results.map((page) => {
        const props = page.properties;
        return {
            id: page.id,
            name: props.Name?.title?.map(t => t.plain_text).join('') || 'Untitled',
            company: props.Company?.select?.name || 'Unknown',
            // Use 'Goal' as description if 'Description' is missing, or empty string
            description: props.Description?.rich_text?.map(t => t.plain_text).join('') ||
                props.Goal?.rich_text?.map(t => t.plain_text).join('') || '',
            contribution: props.Contribution?.rich_text?.map(t => t.plain_text).join('') || '',
            result: props.Result?.rich_text?.map(t => t.plain_text).join('') || '',
            tags: props.Tags?.multi_select?.map((tag) => tag.name) || [],
            startDate: props['Start Date']?.date?.start || '',
            endDate: props['End Date']?.date?.start || '',
        };
    });
};

export const getTestimonials = async () => {
    const databaseId = process.env.NOTION_TESTIMONIALS_DATABASE_ID;
    const response = await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: 'Featured',
                direction: 'descending', // Featured first
            }
        ]
    });
    return response.results.map((page) => {
        const props = page.properties;
        return {
            id: page.id,
            quote: props.Quote?.title?.map(t => t.plain_text).join('') || '',
            author: props.Author?.rich_text?.map(t => t.plain_text).join('') || '',
            context: props.Context?.rich_text?.map(t => t.plain_text).join('') || '',
            featured: props.Featured?.checkbox || false,
        };
    });
};
