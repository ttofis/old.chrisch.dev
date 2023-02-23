<script>
    import Icon from '@iconify/svelte';
    import { theme } from "$lib/theme"

    let dt = new Date();
</script>

<footer>
    <p>chrisch {dt.getFullYear()}</p>
    <h3>
    <a class="zero" href={null} on:click={() => theme.set($theme === "dark" ? "light" : "dark")}>
        {#if $theme == "dark"}
        <Icon style="margin-left: 10px; font-size: 1em" icon="akar-icons:sun-fill" inline="true"/>
        {:else}
        <Icon style="margin-left: 10px; font-size: 1em" icon="akar-icons:moon-fill" inline="true"/>
        {/if}
    </a></h3>
</footer>

<style>
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 2px solid var(--borderColor);
        margin-top: auto;
    }
</style>