# Singa Senior Web Developer recruitment assignment

Development date: **14.12.2025**
Developed by: **Roman Tuomisto**

## Implementation

Assignment was done with minimal help of AI, using mostly only [Nuxt](https://nuxt.com/docs/4.x/getting-started/introduction) official documentation as a reference.

App utilizes all of the Nuxt, recommended best practises including: Auto imports of components and composables, nuxt built in error handling, data fetching lifecycle including caching fetched data for 15 minutes after it was fetched, in order to reduce amount of performed api requests and boosting up load times.

When <SearchForm /> is submitted, is triggers custom `@search-genres` event, that triggers `refresh` function returned from `useGenres` composable, to fech genres again, with query string.

Nuxt `/app` folder structure is used along with Vue and nuxt built in components like <NuxtLink>.

Page structure is done as follows: `pages` folder contains all root level pages like landing page and about page, `pages/genres` includes genres listing page and `[id].vue` that displays single genre. Assignment required genres listing page to be under `/` route instead of `/genres`, but it seemed like antipattern to me, as single genre would be under `/genres/:id`.

I decided to include simple `useFetch` built in composable, to send get requests to `/api/ping` endpoint of Nitro server, to check server health. And response ping set to pong is displayed under footer on App.vue level component. This I believe is extra thing, to demonstrate, that ping pong health check is working as expected.

## Running development server

Install dependencies by running:

`npm install`

Run Nitro development server and open app preview in the browser by running:

`npm run dev -- -o`
