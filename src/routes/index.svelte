<script context="module">
    export const prerender = true;
</script>
<script>
    import Icon from '@iconify/svelte';
</script>

<svelte:head>
    <title>chrisch</title>
    <meta name="og:title" content="chrisch" />
    <meta name="twitter:title" content="chrisch" />
</svelte:head>

<div class="imgContainer">
    <img alt="Chris Charalambous" src="me.png">
</div>
<div class="text">
    <p>Hello! My name is Chris Charalambous.</p>
    <p>I'm currently studying <a href="https://www.ece.ntua.gr/en">Electrical & Computer Engineering</a> at the <a href="https://ntua.gr/en/">National Technical University of Athens</a>.</p>
    <p>I've started programming at a young age and I've learned a decent level:</p>
    <ul>
        <li>Golang, Python, C++, Javascript, HTML, CSS</li>
        <li>Svelte</li>
        <li>Netlify, Firebase</li>
    </ul>
</div>

<h1>Links</h1>
<p>Best way to contact me is through email: <a href="mailto:me@chrisch.dev">me@chrisch.dev</a></p>
<p>But you can also find me here:</p>
<div class="iconList">
    <a class="zero" href="https://github.com/ttofis"><div class="single">
        <Icon style="font-size: 5em" icon="akar-icons:github-fill" />
        <p>github</p>
    </div></a>
    <a class="zero" href="https://twitter.com/elchris414"><div class="single">
        <Icon style="font-size: 5em" icon="akar-icons:twitter-fill" />
        <p>twitter</p>
    </div></a>
    <a class="zero" href="https://linkedin.com/in/chrischaralambous14/"><div class="single">
        <Icon style="font-size: 5em" icon="akar-icons:linkedin-fill" />
        <p>linkedin</p>
    </div></a>
    <a class="zero" href="https://discordapp.com/users/125228190825316352"><div class="single">
        <Icon style="font-size: 5em" icon="akar-icons:discord-fill" />
        <p>discord</p>
    </div></a>
</div>

<style>
    .imgContainer {
        text-align: center;
    }
    .text {
        text-align: left;
    }
    img {
        border-radius: 50%;
        height: 250px;
    }
    .iconList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .single {
        padding: 10px;
        width: auto;
        text-align: center;
    }
    p {
        font-size: 1.1em;
    }
    @media only screen and (max-width: 600px) {
        img {
            width: 80%;
            height: auto;
            aspect-ratio: 1;
        }
    }
</style>