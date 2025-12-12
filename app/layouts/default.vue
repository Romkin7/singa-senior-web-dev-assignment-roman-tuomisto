<script setup lang="ts">
import AppHeader from "@/components/app-header.vue";
</script>

<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
