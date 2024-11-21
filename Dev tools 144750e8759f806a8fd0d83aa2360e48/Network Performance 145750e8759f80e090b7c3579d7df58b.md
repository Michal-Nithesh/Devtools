# Network Performance

# In this lesson we'll learn

- Page load market research
- The Network waterfall
- JS Parse cost

# Interesting facts about page load time

> 
> 
> 
> Walmart and Amazon both observed a 1% increase in earnings for every 100 milliseconds of improved webpage speed.
> 

> 
> 
> 
> Yahoo saw a 9% increase in traffic to every 400 milliseconds of webpage speed improvement.
> 

> 
> 
> 
> Google loses 20% of their traffic for every additional 100 milliseconds it takes for a page to load.
> 

![google-marketing.png](Network%20Performance%20145750e8759f80e090b7c3579d7df58b/google-marketing.png)

In this lesson, we'll learn about

- Network terminology
- Filtering requests
- Inspecting packets
- Watching your app load with screenshots
- Simulate Network conditions
- Emulate offline mode
- The Network waterfall

# The Network Waterfall

Let's talk about the life of a network request.

- ◻️ **Queueing**
    - There are higher priority requests.
    - There are already six TCP connections open for this origin, which is the limit. Applies to HTTP/1.0 and HTTP/1.1 only.
    - The browser is briefly allocating space in the disk cache
- ⬜️ **Stalled**
    - The request is stuck Queueing
- 🟩 **DNS Lookup**
    - Resolving an IP address
- 🟧 **Initial Connection**
    - TCP handshakes or establishing SSL
- 🟧 **Service Worker Startup**
    - Starting up a Service Worker
- 🟪 **Service Worker respondsWith**
    - Service Worker sending data to browser
- 🟩 **Waiting (TTFB)**
    - Waiting for the first byte from the server
- 🟦 **Content Download**
    - Browser is receiving a response from a server

# Network performance isn't everything!

We spend so much energy compressing and combining JavaScript into dense bundles so they travel across the network faster! But that's not the whole story.

This entire [article](https://medium.com/reloading/javascript-start-up-performance-69200f43b201) is worth a read but the TL;DR is that parse time is a huge performance problem, especially for mobile devices.

![js-parse.png](Network%20Performance%20145750e8759f80e090b7c3579d7df58b/js-parse.png)

![parse-time.png](Network%20Performance%20145750e8759f80e090b7c3579d7df58b/parse-time.png)

# Measuring real user performance

Why measure performance from real users?

# First we had getTime

```jsx
const start = new Date().getTime();

for (let i = 0; i < 100000; i++) {
  // Do nothing
}

const end = new Date().getTime();

console.log(end - start);

```

# Then we got console.time

```jsx
console.time("doNothing");

for (let i = 0; i < 100000; i++) {
  // Do nothing
}

console.timeEnd("doNothing");

```

# Now we have performance mark and measure!

```jsx
performance.mark("Start");

for (let i = 0; i < 1000000000; i++) {
  // Do nothing
}

performance.mark("End");

performance.measure("Chrome Devtools", "Start", "End");

performance.getEntriesByType("measure");

```

You can measure so many things using the [performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance)

```jsx
const resources = performance.getEntriesByType("resource");
const paints = performance.getEntriesByType("paint");
const navigations = performance.getEntriesByType("navigation");
```

# Memory Leaks

# Garbage collection 🚛

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management#garbage_collection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management#garbage_collection)

# Chrome Task Manager

You have 3 great tools for finding memory leaks in Chrome:

1. Chrome Task Manager
2. Performance Panel
3. Memory Panel

# Memory Leak #1 - Too many DOM nodes

Create 1k divs!

# Memory Leak #2 - Detached DOM nodes

Create 1k detached divs!

# What can slow down a website?

- Back End
    - Database
    - Server
    - Network
    - Compression
- Front End
    - Large bundle
    - Too many files
    - Images or JavaScript not async
    - Images too large
    - Images uncompressed
    - Unused JavaScript or CSS
    - CSS in Document Body
    - Not using browser caching

# Simulate Slow Network

# Lighthouse

[Official Lighthouse Docs](https://developers.google.com/web/tools/lighthouse)

- Performance
- PWA
- Best Practices
- Accessibility
- SEO
- Mobile and Desktop performance

# Puppeteer

[https://developers.google.com/web/tools/puppeteer](https://developers.google.com/web/tools/puppeteer)

# Lighthouse CI

[https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/getting-started.md](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/getting-started.md)