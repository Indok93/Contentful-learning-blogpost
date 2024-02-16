import { createClient } from "contentful"

const useContentful = () => {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: "preview.contentful.com"
    })

    const getBlogs = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "post",
                select: "fields"
            });
            return entries;

        } catch (error) {
            console.error(`Error fetching blog posts: ${error}`);
        }
    };

    return {getBlogs};
};

export default useContentful;