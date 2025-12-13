<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const apiBaseUri = runtimeConfig.public.apiBaseUri;
const { results } = await useGenres(apiBaseUri);
const genres = results;
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
    <p v-for="genre in genres">{{ genre.name }}</p>
  </NuxtLayout>
</template>
