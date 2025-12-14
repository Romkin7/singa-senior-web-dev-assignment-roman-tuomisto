<template>
  <section>
    <h1>Welcome to Singa</h1>
    <p>Your gateway to exploring diverse music genres.</p>
    <NuxtLink to="/genres">Browse Genres</NuxtLink>
  </section>
</template>

<style scoped>
section {
  text-align: center;
  margin-top: 2rem;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}
a {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: steelblue;
  text-decoration: underline;
  transition: color ease-in 150ms;
}
a:hover {
  color: darkblue;
}
</style>
