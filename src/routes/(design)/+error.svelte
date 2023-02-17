<script context="module">
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>{$page.status} - chrisch</title>
    <meta name="og:title" content="chrisch" />
    <meta name="twitter:title" content="chrisch" />
</svelte:head>

<h1>{$page.status}</h1>
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