<script>
	import { error } from '@sveltejs/kit';
    import "@fontsource/source-code-pro";
    import "../../../../nightowl.css";

	export let title;
	export let date;
	export let description;
	export let published;

	if (!published) {
		throw error(404);
	}

	let dt = new Date(date);
</script>

<svelte:head>
    <title>{title} - chrisch</title>
    <meta name="og:title" content={title} />
    <meta name="twitter:title" content={title} />
</svelte:head>

<h1 class="title">{title}</h1>
<div class="metadata">
	<p>{description}</p>
	<p>{dt.toDateString()}</p>
</div>

<slot />

<style>
	.title {
		margin: 0;
	}
	.metadata {
		border-bottom: 2px solid var(--borderColor);
		display: flex;
		justify-content: space-between;
	}

    :global(code[class*="language-"] *),
    :global(pre[class*="language-"] *)  {
        font-family: "Source Code Pro", Consolas,  monospace;
    }

	:global(.blogImg) {
		width: 60vw;
	}

	@media only screen and (max-width: 600px) {
		:global(.blogImg) {
			width: 85vw;
		}
	}
</style>