<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationComponent from './components/NavigationComponent.vue'
</script>

<template>
  <main class="min-h-screen bg-primary">
    <header>
      <NavigationComponent />
    </header>
    <RouterView />
  </main>
</template>

<style scoped></style>
