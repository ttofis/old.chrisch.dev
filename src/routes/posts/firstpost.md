---
title: First post
description: First post in my new website
date: 2022-06-10
published: true
---

Hello and welcome to my new website!

I built this website using [Sveltekit](https://kit.svelte.dev/) using [mdsvex](https://mdsvex.pngwn.io/) for Markdown processing.

It was suprisingly difficult to get post listing to work and metadata extract to work automatically, but I managed to do it with help from [sveltekit-mdvsex-blog](https://github.com/mvasigh/sveltekit-mdsvex-blog).

You can find the source code on my [github repository](https://github.com/ttofis/chrisch.dev).

## Some neat stuff I've used to create this website
### Frosted Glass

```css
background-color: rgba(255,255,255,0.8);
backdrop-filter: saturate(180%) blur(20px);
-webkit-backdrop-filter: saturate(180%) blur(20px);

@-moz-document url-prefix() {
    header {
        background-color: rgb(255,255,255);
    }
}
```
**Note:** The frosted glass effect is not supported by firefox as *background-filter* is not avaiable. Thus, I remove all opacity for Firefox so it looks comparable to my desired design.

### fontsource
I used [fontsource](https://fontsource.org/) instead of traditional methods to load in fonts.

Command to install a font

```
npm add Lato
```

In the script section of my svelte file

```js
import "@fontsource/lato"
```

And then directly into my css file

```css
font-family: "Lato"
```