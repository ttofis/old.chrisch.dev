<script context="module">
    import { page } from '$app/stores';
</script>

<script>
    import '../app.css';
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
    import { theme } from "$lib/theme";

    let bgColor = $theme === "dark" ? "#121212" : "#FFFFFF";
    
    $: {
        bgColor = $theme === "dark" ? "#121212" : "#FFFFFF";
    }
</script>

<svelte:head>
    <title>{$page.status} - chrisch</title>
	<meta name="description" content="Personal website of Chris Charalambous" />
    <meta name="og:description" content="Personal website of Chris Charalambous" />
    <meta name="theme-color" content={bgColor}>
</svelte:head>

{#if $theme==="dark"}
    <style>
        :root {
            --headerColor: rgba(18,18,18,0.8);
            --ffHeaderColor: #121212;
            --linkColor: #03da9d;
            --textColor: white;
            --borderColor: white;
            background-color: #121212;
        }
    </style>
{:else}
    <style>
        :root {
            --headerColor: rgba(255,255,255,0.8);
            --ffHeaderColor: white;
            --linkColor: blue;
            --textColor: black;
            --borderColor: #222;
            background-color: white;
        }
    </style>
{/if}

<div>
    <Header />
    <div class="align">
        <main>
            <h1>{$page.status}</h1>
            <p>Something went wrong!</p>
        </main>

        <Footer />
    </div>
</div>

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