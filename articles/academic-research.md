---
title: Academic Research
subtitle: September 16, 2020
date: "2020-09-16"
---

## Read

### [Cloud gaming: architecture and performance](https://ieeexplore.ieee.org/abstract/document/6574660)

An older article, but it outlines the architecture and high-level problems of cloud gaming nicely. These issues are user input latency and the search for a fast, high quality, and low bandwidth encoder. Additionally, the article mentions how users' tolerance for latency varies by the genre of the game, e.g., users can tolerate much higher latency in a turn-based game than in a first-person shooter.

<br>

<img src="/articles/cloud-gaming-architecture.gif">

<br>
<br>

### [GamingAnywhere: The first open source cloud gaming system](https://dl.acm.org/doi/abs/10.1145/2537855)

An open-source cloud gaming system that works across Windows, Linux, OS X, and Android. Although [the GitHub](https://github.com/chunying/gaminganywhere) is long dead, the article outlines the implementation of a platform that outperformed OnLive and Gaikai. It also provides suggestions to further improvments through APIs or a divide-and-conquer strategy among remote servers for intensive game rendering. The latter seems like a novel approach.

<br>

### [Placing Virtual Machines to Optimize Cloud Gaming Experience](https://ieeexplore.ieee.org/abstract/document/6853364)

The dilemma addressed in this article is one of matching remote hardware power to gaming requirements. The article looked at the usage of a broker computer to dynamically allocate computing power for clients.

<br>

### [Cloud gaming: a green solution to massive multiplayer online games](https://ieeexplore.ieee.org/abstract/document/6882299)

This article examines the reduction of unnecessary hardware due to cloud gaming. It explores graphics rendering, video encoding, and network delivery. Notably, it mentions a hybrid architecture in mobile cloud gaming wherein the bandwidth of data is reduced by partially utilizing local hardware.

<br>

### [Outatime: Using Speculation to Enable Low-Latency Continuous Interaction for Mobile Cloud Gaming](https://dl.acm.org/doi/abs/10.1145/2742647.2742656)

Achieving a wide area of low latency is difficult and creating many data centers defeats the cost efficiency of cloud gaming. This article introduces a novel idea: rendering potential future frames and delivering those to the client. This reduces latency, as the frames can be almost instantly rendered when correctly predicted. The downside is an increase in bandwidth necessary to send the potential frames. Ultimately, and rather predictably, the implementation excelled in predictable scenarios like linear player movement but did not perform well in less-predictable game events like portals. Additionally, audio support was lacking.

<br>

### [Improving Cloud Gaming Experience through Mobile Edge Computing](https://ieeexplore.ieee.org/abstract/document/8685768)

Offloading game rendering to nearby edge nodes rather than the remote cloud is given as a solution to high latency. This recent article utilizes AI to determine the best edge nodes for a client to connect to, thus minimizing bandwidth and latency.

<br>

<img src="/articles/edgegame-workflow.gif">

<br>
<br>

### [Cloud Fog: Towards High Quality of Experience in Cloud Gaming](https://ieeexplore.ieee.org/abstract/document/7349605)

The "Cloud Fog" consists of nearby idle player machines that act as super nodes, rendering graphics and streaming them to clients. This approach is particularly relevant to MMOs, which can have hundreds of thousands of players at once, forming the "Cloud Fog". This article preceded the edge computing article by a few years and likely served as a source of inspiration.

<br>

### [The Future of Cloud Gaming [Point of View]](https://ieeexplore.ieee.org/abstract/document/7435392)

The interesting part of this article comes after its history of the past and in its predictions for the future. The article made the following forecasts: technologies will shift toward a new programming paradigm, innovative charging models may take time to develop, diverse internet services are to be integrated, more multiplayer games will be engaged, richer interactions will emerge among gamers and observers, and novel gaming paradigms will converge in the cloud. In summation though, the article suggests that there will likely be wide-ranging paradigm changes from how users interact with games to how games are developed.

<br>

### [How YouTube led to Google's cloud-gaming service: The tech that made YouTube work everywhere promises to do the same for games](https://ieeexplore.ieee.org/abstract/document/8818578)

The codecs, data centers, and other innovations made by Google to improve YouTube proved very applicable to the case of Stadia. The common video compression codec H.264 was superceded by Google's competing codec VP9, which "delivers HD and 4K video streaming on YouTube with half the bandwidth of other codecs."

<br>

### [Cloud Gaming: Implications of cloud gaming, shifting towards servitization in the gaming industry](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjurcqai-3rAhULDKwKHaeTDMgQFjAAegQIBBAB&url=https%3A%2F%2Fportfolio.cr.utwente.nl%2Fstudent%2Fkrolzmt%2Fassets%2FLiterature%2520Research%2520Project%252017-04-2019%2520Zanur%2520Krol.pdf&usg=AOvVaw1ZUC_U7Qa0lS4HusL9EjB3)

Published just last year, this article gives a holistic review of the current state of cloud gaming. It concludes that the world is still waiting for a company to unite recent innovations in cloud fog, server allocation, and cloud architecture into a cost-effective and commercialized solution.

<br>

## Backlogged

### [GamingAnywhere: an open cloud gaming system](https://dl.acm.org/doi/abs/10.1145/2483977.248398)

### [Measuring the latency of cloud gaming systems](https://dl.acm.org/doi/abs/10.1145/2072298.2071991)

### [An Evaluation of QoE in Cloud Gaming Based on Subjective Tests](https://ieeexplore.ieee.org/abstract/document/5976180)

### [The brewing storm in cloud gaming: A measurement study on cloud to end-user latency](https://ieeexplore.ieee.org/abstract/document/6404024)

### [On the Quality of Service of Cloud Gaming Systems](https://ieeexplore.ieee.org/abstract/document/6670099)

### [Developing Cloud Business Models: A Case Study on Cloud Gaming](https://ieeexplore.ieee.org/abstract/document/5741005)

### [Are all games equally cloud-gaming-friendly? An electromyographic approach](https://ieeexplore.ieee.org/abstract/document/6404025)

### [A Survey on Cloud Gaming: Future of Computer Games](https://ieeexplore.ieee.org/abstract/document/7536162)

### [Using graphics rendering contexts to enhance the real-time video coding for mobile cloud gaming](https://dl.acm.org/doi/abs/10.1145/2072298.2072313)

### [Next Generation Mobile Cloud Gaming](https://ieeexplore.ieee.org/abstract/document/6525574)

### [An empirical study of Cloud Gaming](https://ieeexplore.ieee.org/abstract/document/6404021)

### [VGRIS: Virtualized GPU Resource Isolation and Scheduling in Cloud Gaming](https://dl.acm.org/doi/abs/10.1145/2632216)

### [Cloud gaming onward: research opportunities and outlook](https://ieeexplore.ieee.org/abstract/document/6890683)

### [Enabling Adaptive High-Frame-Rate Video Streaming in Mobile Cloud Gaming Applications](https://ieeexplore.ieee.org/abstract/document/7118144)

### [Enabling Adaptive Cloud Gaming in an Open-Source Cloud Gaming Platform](https://ieeexplore.ieee.org/abstract/document/7137667)

### [Timely cloud gaming](https://ieeexplore.ieee.org/abstract/document/8057197)

### [Mobile Cloud Gaming: Issues and Challenges](https://link.springer.com/chapter/10.1007/978-3-642-40276-0_10)

### [Audio–Visual Emotion-Aware Cloud Gaming Framework](https://ieeexplore.ieee.org/abstract/document/7122897)

### [LiveRender: A Cloud Gaming System Based on Compressed Graphics Streaming](https://ieeexplore.ieee.org/abstract/document/7166339)

### [A Cloudlet-Assisted Multiplayer Cloud Gaming System](https://link.springer.com/article/10.1007/s11036-013-0485-4)
