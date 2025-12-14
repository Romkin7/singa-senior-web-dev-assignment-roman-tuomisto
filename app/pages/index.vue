<script setup lang="ts">
import type { SingaGenresResponse } from "@/@types/singaGenresResponse";

const queryString = ref("");

const runtimeConfig = useRuntimeConfig();
const apiBaseUri = runtimeConfig.public.apiBaseUri;

const { data, pending, error, refresh } = await useGenres(
  apiBaseUri,
  queryString
);

// save results as genres, uses computed, to update view and data based using
const genres = computed(
  () => (data.value as SingaGenresResponse)?.results || []
);
</script>

<template>
  <section>
    <h1>Genres</h1>
    <div class="grid-row">
      <div class="grid-col-12">
        <SearchForm
          v-model:query-string="queryString"
          @search-genres="refresh"
        />
      </div>
    </div>
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
        <NuxtLink :to="`/${genre.id}`" class="genre-card-link">
          <GenreCard :genre="genre" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-around;
}

.grid-col {
  flex-basis: 32%;
  margin-bottom: 0.5rem;
}

.grid-col-12 {
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  align-items: center;
}

.genre-card-link {
  text-decoration: none;
  color: inherit;
}
</style>
