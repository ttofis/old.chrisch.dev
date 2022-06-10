<script>
    import Header from '$lib/Header.svelte'
    import '../app.css';
</script>

<svelte:head>
	<meta name="description" content="Personal website of Chris Charalambous" />
    <meta name="twitter:description" content="Personal website of Chris Charalambous" />
    <meta name="og:description" content="Personal website of Chris Charalambous" />
</svelte:head>


<Header />
<div class="align">
    <main>
        <slot />
    </main>

    <footer>
        <p>chrisch 2022</p>
        <p>Made with love in Athens</p>
    </footer>
</div>

<style>
    footer {
        display: flex;
        justify-content: space-between;
        border-top: 2px solid #222;
    }
    @media (prefers-color-scheme: dark) {
        footer {
            border-color: white;
        }
    }
</style>