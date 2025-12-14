<script setup lang="ts">
import type { SingaGenre } from "@/@types/singaGenre";

const runtimeConfig = useRuntimeConfig();
const apiBaseUri = runtimeConfig.public.apiBaseUri;

const { data, pending, error } = await useGenres(apiBaseUri);
if (error && !data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Resqource not found!",
    data: {
      myCustomField: true,
    },
  });
}

// save results as genres, uses computed, to update view and data based using
const genre = computed(() => (data.value as SingaGenre) || null);
// Set Seo title and description
useSeoMeta({
  title: `Singa - Genre ${genre.value.name} deatails`,
  description: `Details about the genre ${genre.value.name}`,
  robots: "index, follow", // Allow indexing for valid genre pages
});
</script>
<template>
  <section>
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
    <div class="grid-row" v-else-if="!genre">
      <div class="grid-col">
        <h2>No Genres to display</h2>
      </div>
    </div>
    <div class="grid-row" v-else>
      <div class="grid-col">
        <GenreCard :genre="genre" />
      </div>
    </div>
  </section>
</template>
