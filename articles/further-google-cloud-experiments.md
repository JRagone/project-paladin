---
title: Further Google Cloud Experiments
subtitle: October 7, 2020
date: "2020-10-07"
---

## Google Cloud

### Moonlight

Last week, a critical barrier I ran into was Moonlight's dependency on GeForce Experience's GameStream. Since GeForce Experience's GameStream requires the host machine to have a GTX series card, my only hope of getting around this requirement was a random GitHub user's [script](https://github.com/acceleration3/cloudgamestream). Unfortunately, this script wasn't working when I ran it last week, and resolving that issue is where I picked up this week.

<br>

First, I tried running the script on AWS, which is what the writer behind the script had tested personally. That gave the same results, so I went back to GCP. The instructions to the script suggested using AnyDesk or TeamViewer instead of Remote Desktop to run the script, as it messed around with monitors. I tried the script using AnyDesk and TeamViewer and an array of different setups: Windows Server 2016, Windows Server 2019, and the Windows Server 2019 image offered on the [Nvidia Gaming PC](https://console.cloud.google.com/marketplace/details/nvidia/nvidia-gaming-windows-server-2019) from the GCP marketplace. After many hours, I wasn't making any progress, and it became clear to me that the issue was likely with the script.

<br>

I started trying to debug the script by running each command manually in the terminal. When I got to the driver installation step, the script would fail. Looking into this, I tried manually installing the driver from the script, and got an error related to hardware incompatability. I checked the issues on the repo for this script and found [one](https://github.com/acceleration3/cloudgamestream/issues/4) that matched the problem I'd just seen. The issue was less than a week old, and the author of the script said he planned on fixing the script in an update. At this point, I wasn't sure if getting Moonlight to work would be possible, as I anticipated waiting for the author to update the script.

<br>

On Tuesday though, I decided to have one last go at it and started up an instance of the Nvidia Gaming PC on GCP. My hope with this attempt was that the driver on the Nvidia Gaming PC would work as-is, and I wouldn't actually need to install the driver from the script. I ran the Parsec setup from last week and used Parsec as my means of connecting to the desktop once it was installed. I downloaded the scripts from GitHub and edited out the portion that downloaded and installed the new driver. After that, I crossed my fingers and ran the edited script.

<br>

And it worked!

<br>

<img src="/articles/shield-enabled.png" width="750px">

<br>
<br>

I did a little dance once I enabled shield and called it there, planning to pick things up in the next week and hopefully not hit any more major roadblocks.

<br>

## Hours

### Interview

One hour

<br>

### Provisioning and Testing AWS

Two hours

<br>

### Testing GCP Images and Machines

Six hours

<br>

### Debugging Script

One hour

<br>

### Working Attempt

Two and a half hours
