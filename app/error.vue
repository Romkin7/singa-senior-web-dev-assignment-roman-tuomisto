<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
// Set Seo title and description
useSeoMeta({
  title: `Error ${props.error.statusCode} - ${props.error.message}`,
  description: `An error occurred: ${props.error.message}`,
  robots: "noindex, nofollow", // Don't index 404 pages
});
</script>

<template>
  <main>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
}
h1 {
  font-size: 6rem;
  margin-bottom: 1rem;
  color: brown;
}
p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: darkslategray;
}
a {
  font-size: 1.5rem;
  color: steelblue;
  text-decoration: underline;
  transition: color ease-in 150ms;
}
a:hover {
  color: darkblue;
}
</style>
