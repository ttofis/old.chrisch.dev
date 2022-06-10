<header>
    <div class="wrapper">
    <div class="content">
        <h1><a class="zero" href="/">chrisch</a></h1>
        <h2><a class="zero" href="/projects">projects</a> - <a class="zero" href="/posts">posts</a></h2>
    </div>
    </div>
</header>

<style>
    h1 {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    header {
        position: fixed;
        width: 100vw;
        background-color: rgba(255,255,255,0.8);
        backdrop-filter: saturate(180%) blur(20px);
        text-align: center;
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
    @media (prefers-color-scheme: dark) {
        header {
            background-color: rgba(18,18,18,0.8);
        }
        .wrapper {
            border-color: white;
        }
    }
</style>