<template>
  <div class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-50">
    <div class="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
      <div class="absolute -top-32 -left-20 w-72 h-72 rounded-full bg-pink-300/40 blur-3xl"></div>
      <div
        class="absolute -bottom-32 -right-10 w-72 h-72 rounded-full bg-sky-300/40 blur-3xl"
      ></div>
    </div>

    <div
      class="relative flex flex-col items-center justify-center gap-6 px-6 py-8 rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-2xl shadow-2xl"
    >
      <div class="relative">
        <div
          class="w-24 h-24 rounded-full border-2 border-transparent bg-gradient-to-tr from-pink-500 via-purple-500 to-sky-500 p-[2px] animate-spin-slow"
        >
          <div class="w-full h-full rounded-full bg-white flex items-center justify-center">
            <Loader2 class="w-7 h-7 text-primary animate-spin" />
          </div>
        </div>

        <div
          class="absolute -bottom-2 -right-2 px-2 py-1 rounded-full bg-secondary text-primary text-[10px] font-semibold tracking-wide shadow"
        >
          IG
        </div>
      </div>

      <div class="text-center space-y-1">
        <p class="text-xs uppercase tracking-[0.25em] text-slate-500">Loading portfolio</p>
        <h1 class="text-xl font-semibold text-slate-900">Inal Garali</h1>
      </div>

      <div class="w-40 h-1.5 rounded-full bg-slate-200 overflow-hidden">
        <div
          class="h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 animate-progress"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'
</script>

<style scoped>
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 6s linear infinite;
}

@keyframes progress {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-progress {
  animation: progress 1.4s ease-in-out infinite;
}
</style>
