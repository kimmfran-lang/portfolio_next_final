const { Client } = require('@notionhq/client');

// Manually load env vars for this script since we are running with node directly
const NOTION_TOKEN = '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';
const PROJECTS_ID = '2b6b4dc6ae0e807294f5dfbed6f919ea';
const TESTIMONIALS_ID = '2b6b4dc6ae0e801e967efa327513130e';

const notion = new Client({ auth: NOTION_TOKEN });

async function debug() {
    try {
        console.log('--- Fetching Projects ---');
        const projects = await notion.databases.query({ database_id: PROJECTS_ID, page_size: 1 });
        if (projects.results.length > 0) {
            console.log(JSON.stringify(projects.results[0].properties, null, 2));
        } else {
            console.log('No projects found.');
        }

        console.log('\n--- Fetching Testimonials ---');
        const testimonials = await notion.databases.query({ database_id: TESTIMONIALS_ID, page_size: 1 });
        if (testimonials.results.length > 0) {
            console.log(JSON.stringify(testimonials.results[0].properties, null, 2));
        } else {
            console.log('No testimonials found.');
        }
    } catch (error) {
        console.error(error);
    }
}

debug();
