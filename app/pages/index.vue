<script setup lang="ts">
import type { SingaGenresResponse } from "~/@types/singaGenresResponse";

const runtimeConfig = useRuntimeConfig();
const apiBaseUri = runtimeConfig.public.apiBaseUri;

const { data, pending, error } = await useGenres(apiBaseUri);

// save results as genres, uses computed, to update view and data based using
const genres = computed(
  () => (data.value as SingaGenresResponse)?.results || []
);
</script>
<template>
  <section>
    <h1>Genres</h1>
    <div class="grid-row" v-if="pending">
      <div class="grid-col">
        <h2>Loading</h2>
      </div>
    </div>
    <div class="grid-row" v-else-if="error">
      <div class="grid-col">
        <h2>Error</h2>
        <p>Status: {{ error.statusCode }}</p>
        <p>{{ error.message }}</p>
      </div>
    </div>
    <div class="grid-row" v-else-if="genres.length === 0">
      <div class="grid-col">
        <h2>No Genres to display</h2>
      </div>
    </div>
    <div class="grid-row" v-else>
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
