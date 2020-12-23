---
title: Benchmark Article
subtitle: December 2, 2020
date: "2020-12-1"
---

## New Article

### Medium

The [new Medium article](https://johnragone.medium.com/moonlight-vs-parsec-on-google-cloud-platform-1d43cfd0f2c1) is up now. It goes over the results of the benchmarking in a bit more detail. I've linked [the YouTube video](https://youtu.be/Eh7-l-PyY6Q) I created last time in the article, so readers can use it as a visual supplement.

<br>

<img src="/articles/benchmark-article.png" width="750px">

<br>
<br>

### Reddit

With the new article, I've also made [another Reddit post](https://www.reddit.com/r/cloudygamer/comments/k56udu/moonlight_vs_parsec_on_google_cloud_platform/) to r/cloudygamer. My hope is that the article can convince people to use Moonlight over Parsec when streaming from GCP. For next week, I'll be collating my research into a Reddit post I can put in a couple subreddits such as r/gaming and the like.

<br>

## Tutorial Impact

I got a cool comment the other day on the [Moonlight on GCP article](https://johnragone.medium.com/500-hours-of-free-4k-60-fps-cloud-gaming-with-gcp-and-moonlight-c796fa10f0a3). It was from someone in Singapore saying thanks for the article, because there's no other way he can game on the cloud where he is. I thought that was pretty cool, and it highlighted for me an impact I hadn't thought of with this project. There's a lot of cloud gaming services, but they're actually only available in North America and Central Europe currently. Places like Latin America and Asia are without any sort of service (save for the one Shadow datacenter in Seoul, South Korea). This tutorial could end up helping people in other continents find a way to game on the cloud while they wait for services to reach their area.

<br>

## GCP Image

This was something I was going to add to my original tutorial, but after further testing, it seems this won't work out. It's a bit of a long story, but it starts with the fact that since I can only have one paid GCP account associated with a payment method, I couldn't start a VM instance from an alternate account. So when testing, I had originally gotten the image onto an alternate account, and then switched back to my main to test the image once I thought that it would work beyond there. I actually ended up setting one of my friends up with a GCP instance this break and figured it was a good chance to test the image. Unfortunately, I found out that making an image of a Windows Server instance was a bit messier than I had hoped. I had actually created an image with my username on it, and when someone else made an instance from that image, they would just be on a separate account, with almost none of the presumed benefit of using an image. I haven't figured out a solution for this, as I mostly focused on the article and expo slides this week. It may be the case that this is a lost cause, though.

<br>

## Slides

Just noting here that I worked on [slides](https://docs.google.com/presentation/d/1aXIQJz6_WqRq5JwwqHFKjndW_InfCIuiepNbA7yQfEc/edit?usp=sharing) for the design expo this week.
