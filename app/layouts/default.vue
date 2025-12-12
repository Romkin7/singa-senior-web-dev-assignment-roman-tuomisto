<script setup lang="ts">
import AppFooter from "@/components/app-footer.vue";
import AppHeader from "@/components/app-header.vue";
</script>

<template>
  <AppHeader />
  <main>
    <slot />
  </main>
  <AppFooter />
</template>
