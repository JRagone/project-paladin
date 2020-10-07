---
title: Google Cloud Experiments
subtitle: September 30, 2020
date: "2020-09-30"
---

## Tested Platforms

### Shadow

Shadow, also known as Blade, is likely the highest quality cloud gaming service available today. It's pretty pricey at \$11.99/month, but the quality is extremely high. On my Macbook, I could stream games in 60fps at a native retina resolution. On top of that, it streams the entire Windows desktop, which means one can download and play any Windows game. Users aren't restricted to just Steam games as with GeForce Now or a special library as with Stadia. Users can play games on Steam, Origin, Epic Games Store, etc.

<br>

Below is a GIF from BioShock Infinite, streamed over Wi-Fi at 50mbps.

<br>

<img src="/articles/shadow-bioshock.gif" width="750px">

<br>
<br>

## Google Cloud

### Parsec

I finally got Parsec running on GCP for about $0.60/hr! This is less than the $0.78/hr that Paperspace costs. With the $300 credits that GCP has, this comes out to about 500 hours of free gaming for 90 days, the length of the $300 trial. Below are some high-level steps I took to get this setup.

<br>

1. Launch an [Nvidia Gaming PC](https://console.cloud.google.com/marketplace/details/nvidia/nvidia-gaming-windows-server-2019) with the 4vCPU 15GB memory and about 250GB SSD storage.
2. Download the RDP file and connect to the remote desktop.
3. Run the Parsec script from [their repo](https://github.com/parsec-cloud/Parsec-Cloud-Preparation-Tool) in PowerShell.
4. Log into Parsec and share the computer.
5. Close the remote desktop connection.
6. Open Parsec on the client and connect to the host.

<br>

### Moonlight

I've also been working on getting Moonlight to run on GCP. This has its own hurdles, as Moonlight relies on GeForce Experience's GameStream, which requires that the host machine have a GTX graphics card. Unfortunately, cloud graphics cards are not in the GTX series. There is, though, [a script](https://github.com/acceleration3/cloudgamestream) that is meant to enable GameStream on cloud GPUs. I haven't been able to get this to work just yet, but I'm interested in seeing how the quality of Moonlight compares to Parsec when streaming games through cloud servers.

<br>

If I can get Moonlight working, I think there'd be an audience of people interested in a detailed guide to setting Moonlight up on their own cloud machine. Beyond a guide, a comprehensive script could also be helpful. Moonlight is also open-source, so once I have it running on a remote machine, I can fork the repo and see if there's any changes I can make.
