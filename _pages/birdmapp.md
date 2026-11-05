---
layout: project
project: birdmapp
title: BirdMApp
description: "BirdMApp maps all your bird observations, shows which species live near you in any month, and tracks your progress. Built on a billion sightings."
permalink: /birdmapp
image: /assets/img/birdmapp.jpg
---
BirdMApp lets you map all your bird observations, find local birds and gain insights. Select the folder with your tagged photos, or import a CSV list of observations, and it does the rest.

## Why I built it

I wanted a map for my wildlife photography that said more than “a photo was taken here”. Was this bird a vagrant, or just rare? Which species are actually around this month, when eBird lists 460 for a hotspot and I keep meeting the same few? After a visit to a bird park, where I photographed more than a hundred exotic species, I had to know how far they were from home.

## The hard part was the data

There was no open data on which birds live where, month by month. eBird’s raw observations run to more than 100 GB, and BirdLife International would not share its range maps. GBIF, the open biodiversity network, had what I needed.

I downloaded 2011 through 2021 one month at a time, up to 30 million rows each, and loaded them in R with data.table. Then I removed duplicates, dropped impossible (0, 0) coordinates and filtered out every observation within 1,350 metres of a bird park or zoo, so captive birds would not pass as wild ones. [The full retrospective](/posts/birdmapp-retrospective/) covers the dead ends too.
