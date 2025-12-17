<script setup lang="ts">
import type { SingaGenresResponse } from "@/@types/singaGenresResponse";
import type { SingaGenre } from "~/@types/singaGenre";
// useRoute is used to read route parameters
const route = useRoute();
// useRouter is used to set route parameters
const router = useRouter();
const queryString = computed({
  get: () => route.query.name || "",
  set: (value: string) => {
    router.push({ query: { ...route.query, name: value || undefined } });
  },
});

const runtimeConfig = useRuntimeConfig();
const apiBaseUri = runtimeConfig.public.apiBaseUri;

const { data, pending } = await useGenres(apiBaseUri);

// save results as genres, uses computed, to update view and data based using
const genres = computed(
  () => (data.value as SingaGenresResponse)?.results || []
);

const filterQuery = ref("");

const filteredGenres = computed(() => {
  return genres.value.filter((genre: SingaGenre) =>
    genre.name.includes(filterQuery.value)
  );
});
// Set Seo title and description
useSeoMeta({
  title: "Singa Genres - Home",
  description: "Browse and search genres in the Singa Genres App.",
  robots: "index, follow", // Allow indexing for home page
});
</script>

<template>
  <section>
    <h1>Genres</h1>
    <div class="grid-row">
      <div class="grid-col-12">
        <SearchForm
          v-model:query-string.update_after_two_characters="filterQuery"
        />
      </div>
    </div>
    <div class="grid-row" v-if="pending">
      <div class="grid-col">
        <h2>Loading</h2>
      </div>
    </div>
    <div class="grid-row" v-else-if="genres.length === 0">
      <div class="grid-col">
        <h2>No Genres to display</h2>
      </div>
    </div>
    <div class="grid-row" v-else-if="filteredGenres">
      <div class="grid-col" v-for="genre in filteredGenres" :key="genre.id">
        <NuxtLink :to="`/genres/${genre.id}`" class="genre-card-link">
          <GenreCard :genre="genre" />
        </NuxtLink>
      </div>
    </div>
    <div class="grid-row" v-else>
      <div class="grid-col" v-for="genre in genres" :key="genre.id">
        <NuxtLink :to="`/genres/${genre.id}`" class="genre-card-link">
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
