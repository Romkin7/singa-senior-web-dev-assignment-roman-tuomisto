<script setup lang="ts">
const [queryString, modifiers] = defineModel("query-string", {
  set(value: string) {
    if (modifiers.update_after_two_characters) {
      value = value.length >= 2 ? value : "";
    }
    return value;
  },
});
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

<style scoped>
form {
  display: flex;
  flex-direction: row;
}
form input {
  flex-grow: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}
form button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0 4px 4px 0;
  background-color: rgba(70, 130, 180, 1);
  color: #fff;
  cursor: pointer;
  transition: background-color ease-in 150ms;
}
form button:hover {
  background-color: rgba(70, 130, 180, 0.8);
}
</style>
