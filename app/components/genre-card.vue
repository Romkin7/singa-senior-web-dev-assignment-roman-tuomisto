<script setup lang="ts">
import type { SingaGenre } from "@/@types/singaGenre";
defineProps<{
  genre: SingaGenre;
}>();
</script>

<template>
  <article>
    <h2>{{ genre.name }}</h2>
    <p>id {{ genre.id }}</p>
    <p>{{ genre.imagebank.images }}</p>
  </article>
</template>

<style scoped>
article {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
}
</style>
