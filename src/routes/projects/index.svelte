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

<div class="list">
    <div class="item">
        <h2>chrisch.dev</h2>
        <div class="inner">
            <img src="/projects/chrisch.dev.png" alt="Crosswordle game" />
            <div class="flexy">
                <p>The site you're currently viewing.</p>
                <div class="bottom">
                    <p><b>Technologies used: </b>Node, Svelte, Sveltekit, Netlify</p>
                    <div class="icons">
                        <a href="/posts/firstpost"><Icon icon="akar-icons:info-fill" /></a>
                        <a href="/"><Icon class="icon" icon="akar-icons:link-chain" /></a>
                        <a href="https://github.com/ttofis/chrisch.dev"><Icon class="icon" icon="akar-icons:github-fill" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="item">
        <h2>Crosswordle</h2>
        <div class="inner">
            <img src="/projects/crosswordle.png" alt="Crosswordle game" />
            <div class="flexy">
                <p>A wordle inspired game crossword twist!</p>
                <div class="bottom">
                    <p><b>Technologies used: </b>Node, Svelte, Netlify</p>
                    <div class="icons">
                        <a href="https://crosswordle.chrisch.dev"><Icon class="icon" icon="akar-icons:link-chain" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .flexy {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .inner {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
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
        margin-bottom: 30px;
        /*border: 2px var(--borderColor) solid;
        padding: 10px;*/
        width: auto;
        border-radius: 10px;
    }
    .icons {
        font-size: 2em;
    }
    .item h2 {
        width: 100%;
        border-bottom: 2px var(--borderColor) solid;
        margin: 0;
        font-size: min(5vw, 1.5em);
    }
    .item .bottom {
        margin-top: auto;
    }
</style>