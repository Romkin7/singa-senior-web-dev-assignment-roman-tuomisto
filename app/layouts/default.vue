<template>
  <AppHeader />
  <main>
    <slot />
  </main>
  <AppFooter />
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
}
</style>
