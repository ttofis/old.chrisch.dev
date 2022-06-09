<script>
    import Header from '$lib/Header.svelte'
    import '../app.css';
</script>

<svelte:head>
	<title>chrisch</title>
    <meta name="og:title" content="chrisch" />
    <meta name="twitter:title" content="chrisch" />
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

    </footer>
</div>