<template>
  <header>
    <nav>
      <NuxtLink to="/"><h1 class="brand">Singa</h1></NuxtLink>
      <NuxtLink to="/genres">Genres</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/non-existing-page">Non-existing Page</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.brand {
  margin: 0;
  font-size: 1.5rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

nav {
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.25rem;
}
</style>
