import { error } from "@sveltejs/kit"
import data from "../data";

export const load = ({ params }) => {
    const post = data.find((post) => post.id === params.id);

    if(!post) error(404);

    return { post }
};