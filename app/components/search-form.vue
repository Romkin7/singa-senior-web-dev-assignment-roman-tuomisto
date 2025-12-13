<script setup lang="ts">
const queryString = defineModel<string>("query-string");
const emit = defineEmits<{
  "search-genres": [];
}>();
</script>
<template>
  <form @submit.prevent="emit('search-genres')">
    <input
      name="name"
      v-model="queryString"
      type="search"
      placeholder="Search genres"
    />
    <button type="submit">Search</button>
  </form>
</template>
