<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export function load({ error, status }) {
        return {
        props: {
            title: `${status}`
        }
        };
    }
</script>

<script>
    export let title;
</script>

<svelte:head>
    <title>{title} - chrisch</title>
    <meta name="og:title" content="chrisch" />
    <meta name="twitter:title" content="chrisch" />
</svelte:head>

<h1>{title}</h1>
<p>Something went wrong!</p>

<style>
    h1 {
        text-align: center;
        font-size: 10vw;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    p {
        text-align: center;
    }
</style>