// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  experimental: {
    payloadExtraction: true,
  },
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBaseUri: "https://api.singa.com/v1.4",
    },
  },
  nitro: {
    prerender: {
      routes: ["/about"],
    },
  },
});
