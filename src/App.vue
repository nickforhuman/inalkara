<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import NavigationComponent from './components/NavigationComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import PreloaderComponent from './components/PreloaderComponent.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})
</script>

<template>
  <main class="min-h-screen bg-primary">
    <PreloaderComponent v-if="isLoading" />
    <header>
      <NavigationComponent />
    </header>
    <RouterView />
    <FooterComponent />
  </main>
</template>

<style scoped></style>
