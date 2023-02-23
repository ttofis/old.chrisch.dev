<script>
    import Icon from '@iconify/svelte';
    let status = "fullView";
</script>

<svelte:head>
    <title>Projects - chrisch</title>
    <meta name="og:title" content="Projects - chrisch" />
</svelte:head>

<div class="header">
    <h1>Projects</h1>
    <div class="chk-outer">
        <label class="mobile-hide container">
            <input type="radio" name="radio" bind:group={status} value="fullView">
            <h1 class="button"><Icon class="icon" icon="akar-icons:square" inline="true"/></h1>
        </label>
        <label class="mobile-hide container">
            <input type="radio" name="radio" bind:group={status} value="gridView">
            <h1 class="button"><Icon class="icon" icon="akar-icons:grid" inline="true"/></h1>
        </label>
    </div>
</div>
<div class="list" class:grid={status == "gridView"}>
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
            <picture class="projectPic">
                <source type="image/avif" srcset="/projects/chrisch.dev.avif">  
                <source type="image/webp" srcset="/projects/chrisch.dev.webp"> 
                <img class="projectImg" alt="Crosswordle game" src="/projects/chrisch.dev.png" /> 
            </picture>
            <div class="flexy">
                <p>The site you're currently viewing.
                <hide>
                    <br><br>Features a home page, projects page and an automatic post system.
                    <br>The automatic post system receives its contents from markdown files for each post stored in the source files, translates them to html/css and displays them with my styling.
                    <br>The code parts of the posts use the <a href="https://github.com/PrismJS/prism-themes/blob/master/themes/prism-night-owl.css">Night Owl</a> theme and <a href="https://github.com/adobe-fonts/source-code-pro">Source Code Pro</a> for the font.
                </hide></p>
                <div class="bottom">
                    <p><b>Technologies used: </b>Node, Svelte, Sveltekit, Netlify</p>
                </div>
            </div>
        </div>
    </div>
    <div class="divline" />
    <div class="item">
        <div class="head">
            <h2>Crosswordle</h2>
            <h2 class="icons">
                <a href="https://crosswordle.chrisch.dev"><Icon class="icon" icon="akar-icons:link-chain" /></a>
            </h2>
        </div>
        <div class="inner">
            <picture class="projectPic">
                <source type="image/avif" srcset="/projects/crosswordle.avif">  
                <source type="image/webp" srcset="/projects/crosswordle.webp"> 
                <img class="projectImg" src="/projects/crosswordle.png" alt="Crosswordle game" />
            </picture>
            <div class="flexy">
                <p>A wordle inspired game crossword twist!
                <hide>
                    <br><br>Using wordle's fun word searching idea, you solve a crossword build out of multiple sized words.
                    <br>Currently has limited puzzles, with the ability to switch through them with by applying a #(0-4) at the end of the url.
                    <br>I also made a Puzzle Creator helper to make puzzle creation much easier.
                    <br><br>Source code coming soon
                </hide></p>
                <div class="bottom">
                    <p><b>Technologies used: </b>Node, Svelte, Netlify</p>
                </div>
            </div>
        </div>
    </div>
    
</div>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header * {
        margin: 0;
    }
    .divline {
		margin: 0 auto;
		width: 80%;
		border-bottom: 2px solid var(--borderColor);
	}
    .chk-outer {
        border-radius: 10px;
        color: white;
        display: flex;
        padding: 0;
    }
    .button {
        background-color: #333;
        margin: 0 2px;
        padding: 0 2px;
        border-radius: 5px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
    }
    .container input:checked ~ .button {
        background-color: #777;
    }
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }
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
    .projectImg {
        margin-top: 10px;
        width: 100%;
        aspect-ratio: 0;
        box-sizing: border-box;
        border: 2px solid var(--borderColor);
    }
    .projectPic {
        width: 100%;
    }
    .grid .inner {
        flex-direction: column;
        column-gap: 0;
        height: 90%;
    }
    .grid {
        display: grid;
        grid-template-columns: calc(50% - 10px) calc(50% - 10px);
        column-gap: 20px;
    }
    .grid .flexy {
        height: 100%;
    }
    .grid .divline {
        display: none;
    }
    .grid hide {
        display: none;
    }
    @media only screen and (max-width: 600px) {
        .inner {
            flex-direction: column;
        }
        .grid .divline {
            display: block;
        }
        .grid {
            display: block;
            column-gap: 0px;
        }
        .hide {
            display: block;
        }
    }    
    .list {
        width: 100%;
        padding: 0;
        margin-bottom: 20px;
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