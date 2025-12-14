<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <main>
    <h1 v-if="error?.statusCode === 404">Resource or page not found!</h1>
    <h1 v-else>An error occurred</h1>

    <p>{{ error?.message }}</p>
    <p>Status: {{ error?.statusCode }}</p>

    <button @click="handleError">Go Home</button>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
}
h1 {
  font-size: 6rem;
  margin-bottom: 1rem;
  color: brown;
}
p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: darkslategray;
}
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: steelblue;
  text-decoration: underline;
  transition: color ease-in 150ms;
}
button:hover {
  color: darkblue;
}
</style>
