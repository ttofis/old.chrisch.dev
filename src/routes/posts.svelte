<script context="module">
  	export const prerender = true;
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		const posts = await fetch('/posts.json').then((res) => res.json());
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
    export let posts;
</script>

<svelte:head>
    <title>Posts - chrisch</title>
    <meta name="og:title" content="Posts - chrisch" />
    <meta name="twitter:title" content="Posts - chrisch" />
</svelte:head>

<h1>Posts</h1>
{#each posts as post, i}
	<div class="post">
		<a class="zero" href={`posts/${post.slug}`}>
			<h2>{post.title}</h2>
			<div class="metadata">
				<p>{post.description}</p>
				<p>{new Date(post.date).toDateString()}</p>
			</div>
		</a>
	</div>
	{#if i != posts.length-1}
	<div class="divline" />
	{/if}
{/each}

<style>
	.divline {
		margin: 0 auto;
		width: 80%;
		border-bottom: 2px solid #222;
	}
	.post {
		margin-top: 10px;
		margin-bottom: 10px;
	}
	h2 {
		margin: 0;
	}
	p {
		margin: 0;
	}
	.metadata {
		display: flex;
		justify-content: space-between;
	}
	:global(.dark) .divline {
		border-color: white;
	}
</style>