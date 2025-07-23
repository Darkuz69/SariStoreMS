import data from "./data";

export const load = () => {
    const posts = data.map((post) => ({
        id: post.id,
        title: post.title
    }));

    return { posts };
};