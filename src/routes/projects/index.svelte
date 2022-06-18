<script context="module">
    export const prerender = true;
</script>
<script>
    import Icon from '@iconify/svelte';
</script>

<svelte:head>
    <title>Projects - chrisch</title>
    <meta name="og:title" content="Projects - chrisch" />
    <meta name="twitter:title" content="Projects - chrisch" />
</svelte:head>

<h1>Projects</h1>
<p>Here are most of my finished projects</p>

<div class="grid">
    <div class="item">
        <h2>chrisch.dev</h2>
        <p>The site you're currently viewing.</p>
        <div class="bottom">
            <p><b>Technologies used: </b>Sveltekit, Netlify</p>
            <div class="icons">
                <a href="/posts/firstpost"><Icon icon="akar-icons:info-fill" /></a>
                <a href="/"><Icon class="icon" icon="akar-icons:link-chain" /></a>
                <a href="https://github.com/ttofis/chrisch.dev"><Icon class="icon" icon="akar-icons:github-fill" /></a>
            </div>
        </div>
    </div>
    <div class="item">
        <h2>Crosswordle</h2>
        <p>A wordle inspired game crossword twist!</p>
        <div class="bottom">
            <p><b>Technologies used: </b>Svelte, Netlify</p>
            <div class="icons">
                <a href="https://crosswordle.chrisch.dev"><Icon class="icon" icon="akar-icons:link-chain" /></a>
            </div>
        </div>
    </div>
</div>

<style>
    .grid {
        width: 100%;
        display: grid;
        grid-template-columns: calc(50% - 10px) calc(50% - 10px);
        grid-gap: 20px;
    }
    .item {
        border: 2px var(--borderColor) solid;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    }
    .icons {
        font-size: 2em;
    }
    .item h2 {
        width:100%;
        border-bottom: 2px var(--borderColor) solid;
        margin: 0;
        font-size: min(5vw, 1.5em);
    }
    .item .bottom {
        margin-top: auto;
    }
</style>