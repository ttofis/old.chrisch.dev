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
<div class="list">
    <div class="item">
        <div class="head">
            <h2>chrisch.dev</h2>
            <h2 class="icons">
                <a href="/posts/firstpost"><Icon icon="akar-icons:info-fill" /></a>
                <a href="/"><Icon class="icon" icon="akar-icons:link-chain" /></a>
                <a href="https://github.com/ttofis/chrisch.dev"><Icon class="icon" icon="akar-icons:github-fill" /></a>
            </h2>
        </div>
        <div class="inner">
            <img src="/projects/chrisch.dev.png" alt="Crosswordle game" />
            <div class="flexy">
                <p>The site you're currently viewing.</p>
                <div class="bottom">
                    <p><b>Technologies used: </b>Node, Svelte, Sveltekit, Netlify</p>
                </div>
            </div>
        </div>
    </div>
    <div class="item">
        <div class="head">
            <h2>Crosswordle</h2>
            <h2 class="icons">
                <a href="https://crosswordle.chrisch.dev"><Icon class="icon" icon="akar-icons:link-chain" /></a>
            </h2>
        </div>
        <div class="inner">
            <img src="/projects/crosswordle.png" alt="Crosswordle game" />
            <div class="flexy">
                <p>A wordle inspired game crossword twist!</p>
                <div class="bottom">
                    <p><b>Technologies used: </b>Node, Svelte, Netlify</p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .flexy {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }
    .inner {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        column-gap: 10px; /* That's neat! */
    }
    .flexy p {
        margin-top: 10px;
    }
    .item img {
        margin-top: 10px;
        width: 60%;
        aspect-ratio: 0;
    }
    @media only screen and (max-width: 600px) {
        .inner {
            flex-direction: column;
            justify-content: baseline;
        }
        .item img {
            width: 100%;
            aspect-ratio: 0;
        }
    }    
    .list {
        width: 100%;
        padding: 0;
    }
    .item {
        margin-top: 20px;
        margin-bottom: 10px;
        /*border: 2px var(--borderColor) solid;
        padding: 10px;*/
        width: auto;
        border-radius: 10px;
    }
    .item h2 {
        margin: 0;
        /*font-size: min(5vw, 1.5em);*/
    }
    .item .bottom p {
        margin: 0;
    }
    .head {
        width: 100%;
        border-bottom: 2px var(--borderColor) solid;
        display: flex;
        justify-content: space-between;
    }
</style>