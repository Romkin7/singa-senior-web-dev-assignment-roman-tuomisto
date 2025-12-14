<script lang="ts" setup>
const { data, error } = await useFetch("/api/ping");
if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: "Failed to fetch /ping endpoint",
  });
} else {
  console.log("Response from /ping:", data.value);
}
const pongResponse = computed(() => data.value);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <div>
    <h1>/ping endpoint response:</h1>
    <pre>{{ pongResponse }}</pre>
  </div>
</template>

<style>
h1 {
  text-align: center;
  margin-bottom: 1rem;
}
main {
  padding: 1rem;
  min-height: 74vh;
}
</style>
