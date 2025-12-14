<script setup lang="ts">
import type { SingaGenre } from "@/@types/singaGenre";
const route = useRoute();
const genreId = route.params.id;

// Validate ID format, prevent unnecessary API calls
if (!genreId || isNaN(Number(genreId))) {
  throw createError({
    statusCode: 404,
    statusMessage: "Invalid Genre ID",
  });
}

const runtimeConfig = useRuntimeConfig();
const apiBaseUri = runtimeConfig.public.apiBaseUri;

const { data, pending } = await useGenres(apiBaseUri);
// Store genre in computed reactive value
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
    <div class="grid-row" v-else>
      <div class="grid-col">
        <GenreCard :genre="genre" />
      </div>
    </div>
  </section>
</template>
