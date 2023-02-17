<script>
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';

    onMount(() => {
        setTimeout(function() {
            goto("https://discordapp.com/users/125228190825316352");
        }, 5000);
    });    
</script>

<iframe width="1" height="1" style="visibility:hidden" src="discord://discordapp.com/users/125228190825316352"></iframe>
<h1>If that didn't work, click <a href="https://discordapp.com/users/125228190825316352">here</a> or wait 5 seconds.</h1>