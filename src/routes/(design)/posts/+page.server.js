/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const modules = import.meta.glob('./*/*.{md,svx,svelte.md}');

	const postPromises = [];

	for (let [path, resolver] of Object.entries(modules)) {
		const promise = resolver().then((post) => ({
			...post.metadata
		}));

		postPromises.push(promise);
	}

	const posts = await Promise.all(postPromises);
    const publishedPosts = posts.filter((post) => post.published);

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

    return {
        publishedPosts
    };
};