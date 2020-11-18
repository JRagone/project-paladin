---
title: Initial Benchmarks and Video Tutorial Response
subtitle: November 11, 2020
date: "2020-11-11"
---

## Tutorial

### Video Response

Last week, I put out a video tutorial covering the steps of the written tutorial. After fiddling around with video settings, I reuploaded it without the bevels from the first upload. The response has been pretty good! The video has about 265 views at the time of writing this, and it has a click rate of about 9%. This is pretty high, as, according to YouTube, the range is usually between 2-10%. It also got a few comments about pricing and the difficulty of getting a GCP quota increase.

<br>

<iframe width="560" height="315" src="https://www.youtube.com/embed/kNZ6NhPJYfA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>
<br>

On the [Reddit post](https://www.reddit.com/r/cloudygamer/comments/jjn5sf/a_guide_to_gcp_and_moonlight/) from the [written tutorial](https://johnragone.medium.com/500-hours-of-free-4k-60-fps-cloud-gaming-c796fa10f0a3), there had been someone who was having trouble getting GeForce Experience working as needed. I replied to them with this video, and they said that this worked for them and identified where they went wrong. They were running scripts through PowerShell 7 instead of Windows PowerShell, which, for whatever reason, produces different results. I've updated the written tutorial to be very explicit about using Windows PowerShell.

<br>

### Custom Image

I did some more reading on using custom public images and got my custom image working on a different GCP account. This is great, because it compresses a lot of steps from the original tutorial into just using the custom image. I'm not certain what I should do next with this: maybe update the written tutorial with a new section and present it as an alternative way to go about making the instance.

<br>

## Benchmarks

I'm currently working on a video comparing Parsec and Moonlight on GCP. This week, I got a lot of gameplay video of varying genres of games on Parsec and Moonlight. With this, I'm going to do a voiceover and publish next week a video highlighting the differences between the two software.

<br>

### Parsec

The gameplay tests on Parsec were expected; the stream was especially blocky in fast-paced games but was acceptable in strategy games. Witcher 3 was especially bad for some reason. I had to run it at medium settings, and even then the stream was very blocky. I checked my setup and tried restarting Parsec in case there was some sort of one-time issue, but the visual artifacts persisted.

<br>

Although the gameplay tests weren't great, I was suprised by the benchmark I ran. The Parsec test averaged about 7 frames higher than Moonlight. Watching the benchmark though, I could see the stream was extremely choppy. I'll have to reconcile why the framerate is averaging high on the remote machine but streams so choppily to the local machine when I make the video.

<br>

Below is a GIF of Civ 6 streamed using Parsec.

<br>

<img src="/articles/parsec-benchmark-civ.gif" width="750px">

<br>
<br>

### Moonlight

Moonlight performed great in the gameplay tests. There really were no visual artifacts when playing the game, and everything felt much smoother than Parsec. Additionally, not only was I able to run Witcher 3 on medium settings just fine, but I could actually crank it up to ultra settings and maintain 40 FPS. This is a curious thing, as Parsec had a much harder time with Witcher 3.

<br>

On the benchmark, Moonlight scored lower than Parsec. But I don't think that's particularly relevant, as the stream during the benchmark was much clearer and smoother than Parsec's.

<br>

Below is a GIF of Witcher 3 streamed using Moonlight.

<br>

<img src="/articles/moonlight-benchmark-witcher.gif" width="750px">

<br>
<br>

Below is a GIF of Doom streamed using Moonlight.

<br>

<img src="/articles/moonlight-benchmark-doom.gif" width="750px">

<br>
<br>

## Interview

Lastly, I did an email interview with [Dr. Wei Cai](https://www.researchgate.net/profile/Wei_Cai5). He was really helpful in that he could answer all the questions I emailed, which I was sure to say wasn't necessary. I'll note here that he is currently doing research into how cloud gaming should go about handling game ownership. This is relevant to services like Stadia that have service-specific stores and contrast with Shadow, which simply gives the user a Windows desktop. To users, it's a bit concerning to have to buy a game they might already own on the store of a service whose future is not certain. I'd be interested to read what his proposed solutions are.
