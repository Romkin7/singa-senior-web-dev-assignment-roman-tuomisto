<script setup lang="ts">
import type { SingaGenresResponse } from "./@types/singaGenresResponse";

const runtimeConfig = useRuntimeConfig();

const { results } = (await useGenres(
  `${runtimeConfig.public.apiBaseUri}/genres?page_size=38`
)) as unknown as SingaGenresResponse;
console.dir(results);
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
