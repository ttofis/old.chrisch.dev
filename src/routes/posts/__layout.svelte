<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ url, fetch }) {
		const post = await fetch(`${url.pathname}.json`).then(res => res.json());
		if (!post || !post.published) {
			return {
				status: 404,
				error: new Error('Post could not be found')
			};
		}
		return {
			props: {
				post
			}
		};
	}
</script>

<script>
    import "@fontsource/source-code-pro"
    import "../../nightowl.css"

	export let post;

	let dt = new Date(post.date);
</script>

<svelte:head>
    <title>{post.title} - chrisch</title>
    <meta name="og:title" content={post.title} />
    <meta name="twitter:title" content={post.title} />
</svelte:head>

<h1 class="title">{post.title}</h1>
<div class="metadata">
	<p>{post.description}</p>
	<p>{dt.toDateString()}</p>
</div>

<slot />

<style>
	.title {
		margin: 0;
	}
	.metadata {
		border-bottom: 2px solid #222;
		display: flex;
		justify-content: space-between;
	}

    :global(code[class*="language-"] *),
    :global(pre[class*="language-"] *)  {
        font-family: "Source Code Pro", Consolas,  monospace;
    }

	@media (prefers-color-scheme: dark) {
		.metadata {
            border-color: white;
        }
	}
</style>