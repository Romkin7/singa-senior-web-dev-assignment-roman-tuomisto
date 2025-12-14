# Singa Senior Web Developer recruitment assignment

Development date: **14.12.2025**
Developed by: **Roman Tuomisto**

## Implementation

Assignment was done with minimal help of AI, using mostly only [Nuxt](https://nuxt.com/docs/4.x/getting-started/introduction) official documentation as a reference.

App utilizes all of the Nuxt, recommended best practises including: Auto imports of components and composables, nuxt built in error handling, data fetching lifecycle including caching fetched data for 15 minutes after it was fetched, in order to reduce amount of performed api requests and boosting up load times.

When <SearchForm /> is submitted, is triggers custom `@search-genres` event, that triggers `refresh` function returned from `useGenres` composable, to fech genres again, with query string.

Nuxt `/app` folder structure is used along with Vue and nuxt built in components like <NuxtLink>.

Page structure is done as follows: `pages` folder contains all root level pages like landing page and about page, `pages/genres` includes genres listing page and `[id].vue` that displays single genre. Assignment required genres listing page to be under `/` route instead of `/genres`, but it seemed like antipattern to me, as single genre would be under `/genres/:id` and it that case we are midding then `/genres`, so I did it this way, hope it's not a problem or has negative effect on end score. At least with NextJS i've always been working with this approach `/products` and then `/products/:productId` or `/products/:slug` for better SEO.

My custom composable `useGenres` has internally dynamic unique key, that is used to cache response data. For initial render of `/genres`, when all genres are fetched and displayed `singa-genres-${pageSize}` key is used, when search is used `singa-genres-${pageSize}-${queryStringValue.value}` key is used which also includes actual query string as part of the key and when single genre is fetched `singa-genres-${genreId.value}` key is used to store response data under these 3 types of unique keys in cache and can be reused from cache for 15 minutes, before data is expired and new api request is made.

In order to store data in cache under unique keys, nuxt.config.ts configuration had to be modified `experimental: { payloadExtraction: true,},` to include experimental features.

Data is cached under `nuxtApp.payload.data`, which is possible with experimental features enbabled for nuxt.

I decided to include simple `useFetch` built in composable, to send get requests to `/api/ping` endpoint of Nitro server, to check server health. And response ping set to pong is displayed under footer on App.vue level component. This I believe is extra thing, to demonstrate, that ping pong health check is working as expected.

### Time spent on each section

- Part 1: Data fetching: using useAsyncData - **9 Hours**
- Part 2: Pages: genre list and detail pages - **8 Hours**
- Part 3: Rendering Modes: Static about page - **1 Hour**
- Part 4: Nitro: Server ping pong endpoint - **1 Hour**

### Usage of AI

I did use AI in several places, related to error handling practises and data fetching issues.

- `What are the best built in parictices of error handling in Nuxt?`
- `Why does <NuxtLink to="/non-existing-page">Non-existing Page</NuxtLink> link not result in error.vue page with status 404?`
- `What are the main Nuxt Lifecycle in how the data is fetched and used in the pages?`
- `How to handle errors centrally in one place like api errors and 404 errors?`
- `How cache works with expiry in Nuxt? Are there any best practises?`

## Running development server

Install dependencies by running:

`npm install`

Run Nitro development server and open app preview in the browser by running:

`npm run dev -- -o`
