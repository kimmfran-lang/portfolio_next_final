import { Client } from '@notionhq/client';


const notion = new Client({
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
