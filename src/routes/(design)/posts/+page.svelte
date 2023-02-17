<script>
    export let data;
</script>

<svelte:head>
    <title>Posts - chrisch</title>
    <meta name="og:title" content="Posts - chrisch" />
    <meta name="twitter:title" content="Posts - chrisch" />
</svelte:head>

<h1>Posts</h1>
{#each data.publishedPosts as post, i}
	<div class="post">
		<a class="zero" href={`posts/${post.id}`}>
			<h2>{post.title}</h2>
			<div class="metadata">
				<p>{post.description}</p>
				<p>{new Date(post.date).toDateString()}</p>
			</div>
		</a>
	</div>
	{#if i != data.publishedPosts.length-1}
	<div class="divline" />
	{/if}
{/each}

<style>
	.divline {
		margin: 0 auto;
		width: 80%;
		border-bottom: 2px solid var(--borderColor);
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
</style>