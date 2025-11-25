<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationComponent from './components/NavigationComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <main class="min-h-screen bg-primary">
    <header>
      <NavigationComponent />
    </header>
    <RouterView />
    <FooterComponent />
  </main>
</template>

<style scoped></style>
