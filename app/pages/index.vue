<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const apiBaseUri = runtimeConfig.public.apiBaseUri;
const { results } = await useGenres(apiBaseUri);
const genres = results;
</script>
<template>
  <section>
    <h1>Genres</h1>
    <div class="grid-row">
      <div class="grid-col" v-for="genre in genres" :key="genre.id">
        <h2>{{ genre.name }}</h2>
        <p>id {{ genre.id }}</p>
        <p>resource_id {{ genre.resource_id }}</p>
        <p>{{ genre.imagebank.images }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.grid-col {
  flex-basis: 32%;
}
</style>
