import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const theme = writable("light");

if (browser) {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
        theme.set(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme.set("dark");
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        theme.set(event.matches ? "dark" : "light");
    });
    theme.subscribe(value => {
        localStorage.setItem("theme", value);
    });
}