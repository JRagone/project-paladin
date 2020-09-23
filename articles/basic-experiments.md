---
title: Basic Experiments
subtitle: September 23, 2020
date: "2020-09-23"
---

## Tested Platforms

### Paperspace

[Paperspace](https://www.paperspace.com/) is a startup that provides powerful remote machines and is primarily geared towards developers and data scientists looking to leverage a high-powered computer for machine learning. However, they also offer a rig set up with Parsec for $0.78/hr. This means a user has access to a remote machine to download all the games they own and can play remotely over Parsec.

<br>

Below, I tested Skyrim on ultra settings at 1080p.

<br>

<img src="/articles/paperspace-skyrim.png" width="750px">

<br>
<br>

The results were pretty cool! For just $0.78/hr, I was able to play Skyrim on my Mac &mdash; and really any [Parsec-compatible device](https://support.parsecgaming.com/hc/en-us/articles/115002702391-Hardware-Requirements-For-Connecting-To-Another-Computer-With-Parsec) &mdash; with framerates between 40 and 60 fps. I didn't notice any significant visual artifacts, and this was all conducted over Wifi!

<br>

### Stadia

At the other end of the money-saving spectrum from Paperspace was [Stadia](https://stadia.google.com/), Google's take on cloud gaming. This was very high quality in terms of both resolution and latency, and it's capable of streaming up to 4K HDR content thanks to the VP9 encoder developed for streaming content on YouTube. Undoubtedly, this was, from a visual fidelity standpoint, the best among the services I tested. Stadia supports streaming to a TV with Chromecast Ultra, a computer using Google Chrome, and a number of android devices.

<br>

Below is a screenshot from my attempt at Hitman on Stadia.

<br>

<img src="/articles/stadia-hitman.png" width="750px">

<br>
<br>

However, Stadia's costs are extremely high. Beyond the free trial, Stadia costs $9.99/month, and that subscription comes with only a highly-limited selection of games &mdash; 26 to be exact. The rest of the games, of which there are only 52 more available, must be purchased at full price through the Stadia store. This totally eliminates any benefit of already owning the game on platforms like Steam and Origin, thus creating a significant barrier to entry for most users.

<br>

### GeForce Now

Personally, I was pretty excited about this one; my little brother had initially been playing in the beta several years ago, and it looked great from what I saw. After testing it, I think it holds up. This is certainly my favorite platform so far due to its offers and performance; it has a free tier that handles 1080p gaming on ultra graphics and there's no "GeForce Now Store", meaning you can play the games you own. Additionally, GeForce Now supports Windows, Mac, Nvidia Shield, Chromebook, and Android. And after testing it on an FPS, I can honestly say that I could not notice any latency in the game. I'm sure a competitive gamer could tell, but had I not known this were GeForce Now, I would have assumed I was playing games locally.

<br>

I got between 45 and 60 fps playing Far Cry Primal on ultra at 1080p.

<br>

<img src="/articles/geforce-primal.png" width="750px">

<br>

<img src="/articles/geforce-primal2.png" width="750px">

<br>
<br>

The one drawback I did find was that not all of my games were available. It turns out that Nvidia is in negotiations with publishers who would like a cut of the profit for allowing Nvidia to offer their games through GeForce Now. As a result, games like Borderlands, Bioshock, and GTA V are missing from the selection.

<br>

One more item worth noting is that the free tier has a playtime limit of 1 hour before the user has to queue for a server again. I found that I got a server instantly among the several times I tested it, so as long as restarting every hour isn't a major issue, the free tier is rather sustainable. If that won't work, Nvidia's upgraded tier is very cheap at $4.99/month and offers RTX support.

<br>

## Attempted Custom Platform

Having tested a number of platforms, I wanted to attempt to create my own cloud gaming rig on GCP using Parsec. There's [this Medium tutorial](https://medium.com/flickstiq-com/how-to-setup-google-cloud-for-cloud-gaming-b8c1eddef243) which explains how to do it, but it's a bit outdated unfortunately. Nonetheless, after many trying hours, I've gotten almost all the way to streaming games. I'm currently trying to figure out an issue with the graphics driver not attaching to the monitor. I believe that once that works, I should be able to stream games using Parsec. My intent after that is to create a setup for [Moonlight](https://moonlight-stream.org/), another cloud gaming client like Parsec that seems, from [this benchmark video](https://www.youtube.com/watch?v=UOgaCMO2q58&app=desktop), to offer even better performance. Furthermore, Moonlight is [open-source](https://github.com/moonlight-stream), so I'm trying to familiarize myself with the product in the hopes that I might contribute to it for this project.
