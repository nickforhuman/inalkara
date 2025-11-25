<template>
  <!-- intro start  -->
  <div
    class="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
  >
    <div class="flex flex-col justify-center items-center gap-6 px-4">
      <div
        class="relative p-[3px] rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-sky-500 shadow-xl shadow-sky-900/40"
      >
        <div
          id="intro"
          class="w-36 h-36 bg-[url('@/assets/images/me.jpg')] bg-center bg-cover rounded-full"
        ></div>

        <span
          id="intro"
          class="absolute -right-5 bottom-5 rounded-xl border border-white/10 px-4 py-1.5 bg-slate-900/80 backdrop-blur text-[10px] font-semibold uppercase tracking-wide transform -rotate-12 shadow-lg"
        >
          <span class="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
            # Inal Garali
          </span>
        </span>
      </div>

      <!-- headline -->
      <div>
        <h1
          id="intro"
          class="max-w-xl text-center text-secondary text-2xl md:text-3xl font-bold leading-relaxed"
        >
          Building
          <span class="bg-gradient-to-r from-success to-blue-700 bg-clip-text text-transparent">
            modern web & mobile applications, expert systems, business automations
          </span>
          with a focus on aesthetics, functionality, and accessibility.
        </h1>
      </div>

      <div>
        <ul id="intro" class="flex justify-center items-center gap-3 py-6">
          <li>
            <a
              class="px-2 font-bold py-2 w-40 inline-flex justify-center items-center rounded-3xl bg-secondary text-base-100 font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
              href="/"
            >
              Fullstack Engineer
            </a>
          </li>
          <li>
            <a
              class="p-2 flex justify-center items-center rounded-full border border-white/50 hover:border-pink-500 hover:bg-pink-500/10 transition"
              href="https://instagram.com/i.karakhanli"
            >
              <Instagram class="w-5 h-5 text-pink-600" />
            </a>
          </li>
          <li>
            <a
              class="p-2 flex justify-center items-center rounded-full border border-white hover:border-sky-500 hover:bg-sky-500/10 transition"
              href="https://www.linkedin.com/in/inal-karakhanli/"
            >
              <Linkedin class="w-5 h-5 text-blue-400" />
            </a>
          </li>
          <li>
            <a
              class="p-2 flex justify-center items-center rounded-full border border-white hover:border-zinc-900 hover:bg-zinc-900/10 transition"
              href="https://github.com/nickforhuman"
            >
              <Github class="w-5 h-5 text-gray-400" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- intro end  -->
  <PortfolioComponent />
</template>

<script setup lang="ts">
import PortfolioComponent from '@/components/PortfolioComponent.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const introSelector = gsap.utils.toArray('#intro')
  introSelector.forEach((introItem: any, i) => {
    introItem.fromTo(
      { y: 50, opacity: 0 },
      { ScrollTrigger: introItem, duration: 1, delay: i * 0.2, y: 0, opacity: 1 },
    )
  })
})
</script>
