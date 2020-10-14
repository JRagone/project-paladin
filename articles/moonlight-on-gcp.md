---
title: Moonlight on GCP!
subtitle: October 14, 2020
date: "2020-10-14"
---

## It Works!

After I broke through the GeForce Experience barrier last week, I was more or less in the clear to get Moonlight running on GCP. It took a while longer to get it running, but I didn't find any more obstacles as major as tricking GeForce Experience to work on a cloud GPU. There were some ports that had to be forwarded and certain configurations that required re-provisioning the machine and restarting the process, but in the end it finally ran!

<br>

I was really excited to see the results of this in a game, because from some benchmarks I had seen online, Moonlight supposedly offered a fraction of the latency that other softwares had. Additionally, some videos I watched showed Moonlight providing a clearer stream than Parsec. These benchmarks and other videos had been taken using Parsec and Moonlight on a local machine, so I was curious about whether the latency and visual fidelity would hold over the internet. Particularly regarding visual fidelity, I had noticed in testing Parsec that it provided a good &mdash; but not great &mdash; stream. Whenever the scene view changed drastically, the stream would become slightly blocky until the camera held still. This effect appeared at 50mbps, which is the highest bitrate Parsec has in their UI (although higher bitrates are possible). My hope with Moonlight was that it would perform better at the the same bitrate.

<br>

Below are some screenshots of Moonlight streaming games at max settings in 60 FPS 1440p.

<br>

<img src="/articles/moonlight-battlefront.png" width="750px">

<br>
<br>

<img src="/articles/moonlight-witcher.png" width="750px">

<br>
<br>

The quality of Moonlight was phenomenal. There were absolutely no visual artifacts in the time that I tested the game. This was true in online games, singleplayer games, games with primarily static scene views like Civilization, and FPS games where the scene view changes rapidly.

<br>

The results of this are really exciting to me. If I had to venture a guess, I don't think there are more than 100 people who have run Moonlight on the cloud, let alone GCP. The script used to get GeForce Experience working nice is only a month and a half old, so there isn't much info out there on this process. That's where I'm looking to make an addition to the field.

<br>

## Medium Article

I've begun drafting a Medium article detailing exactly how to set up a machine on GCP to stream games with Moonlight. It's pretty time-consuming, as it requires verifying that every step I took is necessary and that any additional setup is properly documented. But I think the time investment could be well worth it. The tutorials by others about Parsec on GCP have been well-received, with the medium articles getting several hundred "claps" and the video tutorials receiving a couple hundred thousand views. This gets me thinking that it would be a good idea to follow this article up with a video tutorial, as those have undoubtedly served as the most useful resources during this project. At the moment though, I'm just balancing the paranoia of someone else beating me to this article with my interest in taking the time to write something clear and helpful.

<br>

Below are some screenshots from the draft article.

<br>

<img src="/articles/medium-1.png" width="750px">

<br>
<br>

<img src="/articles/medium-2.png" width="750px">

<br>
<br>