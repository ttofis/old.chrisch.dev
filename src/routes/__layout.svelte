<script>
    import '../app.css';
    import DarkMode from "svelte-dark-mode";
    import Icon from '@iconify/svelte';

    let switchTheme;
    let theme;
    let dt = new Date();
    
    $: {
        switchTheme = theme === "dark" ? "light" : "dark";
    }
</script>

<DarkMode bind:theme />

<svelte:head>
	<meta name="description" content="Personal website of Chris Charalambous" />
    <meta name="twitter:description" content="Personal website of Chris Charalambous" />
    <meta name="og:description" content="Personal website of Chris Charalambous" />
</svelte:head>

<div class={theme}>
    <header>
        <div class="wrapper">
            <div class="content">
                <h1><a class="zero" href="/">chrisch</a></h1>
                <h2><a class="zero" href="/projects">projects</a> - <a class="zero" href="/posts">posts</a> 
                    <a class="zero" href="" on:click={() => theme = switchTheme}>
                        {#if theme == "dark"}
                        <Icon style="margin-left: 10px; font-size: 1em" icon="akar-icons:sun-fill" />
                        {:else}
                        <Icon style="margin-left: 10px; font-size: 1em" icon="akar-icons:moon-fill" />
                        {/if}
                    </a></h2>
            </div>
        </div>
    </header>
    <div class="align">
        <main>
            <slot />
        </main>

        <footer>
            <p>chrisch {dt.getFullYear()}</p>
            <p>Made in Athens</p>
        </footer>
    </div>
</div>

<style>
    header h1 {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    header {
        position: fixed;
        width: 100vw;
        background-color: rgba(255,255,255,0.8);
        backdrop-filter: saturate(180%) blur(20px);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        text-align: center;
    }
    @-moz-document url-prefix() {
        header {
            background-color: rgb(255,255,255);
        }
    }
    .wrapper {
        width: 60vw;
        margin: 0 auto;
        border-bottom: 2px solid #222;
    }
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media only screen and (max-width: 600px) {
        .wrapper {
            width: 85vw;
        }
    }
    .dark header {
        background-color: rgba(18,18,18,0.8);
    }
    .dark .wrapper {
        border-color: white;
    }
    @-moz-document url-prefix() {
        .dark header {
            background-color: rgb(18,18,18);
        }
    }
    footer {
        display: flex;
        justify-content: space-between;
        border-top: 2px solid #222;
        margin-top: auto;
    }
    .dark footer {
        border-color: white;
    }
</style>