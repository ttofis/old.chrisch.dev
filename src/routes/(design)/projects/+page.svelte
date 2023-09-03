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
            <h2>SeatSignal</h2>
            <h2 class="icons">
                <a href="https://seatsignal.com"><Icon class="icon" icon="akar-icons:link-chain" /></a>
            </h2>
        </div>
        <div class="inner">
            <picture class="projectPic">
                <!--<source type="image/avif" srcset="/projects/chrisch.dev.avif">-->
                <source type="image/webp" srcset="/projects/seatsignal.webp"> 
                <img class="projectImg" alt="SeatSignal" src="/projects/seatsignal.png" /> 
            </picture>
            <div class="flexy">
                <p>A lesson tracking website for <a href="https://www.asu.edu/">ASU</a>
                <hide>
                    <br><br>SeatSignal is a project that aims to help students catch seats in the classes they want.
                    <br>Students purchase slots that last for the whole semester and set the lessons that they want to be notified about.
                    <br>It has a bot that checks the lessons that they want every minute and notifies them via SMS and Email when seats have been found.
                </hide></p>
                <div class="bottom">
                    <p><b>Technologies used: </b>Sveltekit, Netlify, Planetscale, Firebase, Golang, Stripe, Amazon SES, Amazon SNS, Fly.io, Edge Functions, Tailwind</p>
                </div>
            </div>
        </div>
    </div>
    <div class="divline" />
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
                <!--<source type="image/avif" srcset="/projects/chrisch.dev.avif">-->
                <source type="image/webp" srcset="/projects/chrisch.dev.webp"> 
                <img class="projectImg" alt="This site" src="/projects/chrisch.dev.png" /> 
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
            <h2>Todo</h2>
            <h2 class="icons">
                <a href="https://todo.chrisch.dev"><Icon class="icon" icon="akar-icons:link-chain" /></a>
                <a href="https://github.com/ttofis/todo"><Icon class="icon" icon="akar-icons:github-fill" /></a>
            </h2>
        </div>
        <div class="inner">
            <picture class="projectPic">
                <!--<source type="image/avif" srcset="/projects/crosswordle.avif">-->
                <source type="image/webp" srcset="/projects/todo.webp"> 
                <img class="projectImg" src="/projects/todo.png" alt="Todo app" />
            </picture>
            <div class="flexy">
                <p>A simple Todo app
                <hide>
                    <br><br>Todo is a simple, relatively good looking Todo app.
                    <br>Made with the focus of learning Firebase (initially Pocketbase) and Tailwind.
                    <br>Features realtime updates between devices, PWA-like download, Google login.
                </hide></p>
                <div class="bottom">
                    <p><b>Technologies used: </b>Firebase, Svelte, Netlify, Tailwind, Node</p>
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
                <!--<source type="image/avif" srcset="/projects/crosswordle.avif">-->
                <source type="image/webp" srcset="/projects/crosswordle.webp"> 
                <img class="projectImg" src="/projects/crosswordle.png" alt="Crosswordle game" />
            </picture>
            <div class="flexy">
                <p>A wordle inspired game crossword twist!
                <hide>
                    <br><br>Using wordle's fun word searching idea, you solve a crossword build out of multiple sized words.
                    <br>Currently has limited puzzles, with the ability to switch through them with by applying a #(0-4) at the end of the url.
                    <br>I also made a Puzzle Creator helper to make puzzle creation much easier.
                </hide></p>
                <div class="bottom">
                    <p><b>Technologies used: </b>Node, Svelte, Netlify</p>
                </div>
            </div>
        </div>
    </div>
    <div class="divline" />
    <div class="item">
        <div class="head">
            <h2>Elective Sorter</h2>
            <h2 class="icons">
                <a href="https://elective-sorter.chrisch.dev"><Icon class="icon" icon="akar-icons:link-chain" /></a>
                <a href="https://github.com/ttofis/elective-sorter"><Icon class="icon" icon="akar-icons:github-fill" /></a>
            </h2>
        </div>
        <div class="inner">
            <picture class="projectPic">
                <source type="image/webp" srcset="/projects/elective-sorter.webp"> 
                <img class="projectImg" src="/projects/elective-sorter.png" alt="elective-sorter game" />
            </picture>
            <div class="flexy">
                <p>A helper tool to sort the elective lessons in order of preference.
                <hide>
                    <br><br>Designed for the Medicine Degree of the <a href="https://en.uoa.gr/">NKUA</a>, this tool helps the difficult decision of the order of preference for their elective lesson.
                    <br>It utilizes Pairwise Comparisons to make simple, managable decisions and is equiped with an algorithm to reduce the amount of needed comparisons.
                    <br>Project is written in Greek.
                </hide></p>
                <div class="bottom">
                    <p><b>Technologies used: </b>Node, Svelte, Sveltekit, Tailwind, Netlify</p>
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