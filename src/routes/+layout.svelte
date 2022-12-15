<script>
    import '../app.css';
    import DarkMode from "svelte-dark-mode";
    import Icon from '@iconify/svelte';
    import Header from '$lib/Header.svelte';

    let switchTheme;
    let theme;
    let dt = new Date();
    let bgColor;
    
    $: {
        switchTheme = theme === "dark" ? "light" : "dark";
        bgColor = theme === "dark" ? "#121212" : "#FFFFFF";
    }
</script>

<svelte:head>
	<meta name="description" content="Personal website of Chris Charalambous" />
    <meta name="twitter:description" content="Personal website of Chris Charalambous" />
    <meta name="og:description" content="Personal website of Chris Charalambous" />
    <meta name="theme-color" content={bgColor}>
</svelte:head>

<DarkMode bind:theme />
{#if theme==="dark"}
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
            <slot />
        </main>

        <footer>
            <p>chrisch {dt.getFullYear()}</p>
            <h3>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a class="zero" href="javascript:void(0);" on:click={() => theme = switchTheme}>
                {#if theme == "dark"}
                <Icon style="margin-left: 10px; font-size: 1em" icon="akar-icons:sun-fill" inline="true"/>
                {:else}
                <Icon style="margin-left: 10px; font-size: 1em" icon="akar-icons:moon-fill" inline="true"/>
                {/if}
            </a></h3>
        </footer>
    </div>
</div>

<style>
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 2px solid var(--borderColor);
        margin-top: auto;
    }
</style>