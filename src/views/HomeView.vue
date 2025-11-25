<template>
  <!-- intro start  -->
  <div
    class="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-slate-50 via-white to-slate-100"
  >
    <div class="flex flex-col justify-center items-center gap-6 px-4">
      <div
        data-intro
        class="relative p-[3px] rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-sky-500 shadow-xl shadow-slate-300/80"
      >
        <div
          class="w-36 h-36 bg-[url('@/assets/images/me.jpg')] bg-center bg-cover rounded-full"
        ></div>

        <span
          data-intro
          class="absolute -right-5 bottom-5 rounded-xl border border-slate-200 px-4 py-1.5 bg-white/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wide transform -rotate-12 shadow-lg"
        >
          <span class="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
            # Inal Garali
          </span>
        </span>
      </div>

      <!-- headline -->
      <div>
        <h1
          data-intro
          class="max-w-xl text-center text-slate-900 text-2xl md:text-3xl font-bold leading-relaxed"
        >
          Building
          <span class="bg-gradient-to-r from-emerald-500 to-blue-700 bg-clip-text text-transparent">
            modern web & mobile applications, expert systems, business automations
          </span>
          with a focus on aesthetics, functionality, and accessibility.
        </h1>
      </div>

      <div>
        <ul data-intro class="flex justify-center items-center gap-3 py-6">
          <li>
            <a
              class="px-2 font-bold py-2 w-40 inline-flex justify-center text-primary items-center rounded-3xl bg-secondary font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
              href="/"
            >
              Fullstack Engineer
            </a>
          </li>
          <li>
            <a
              class="p-2 flex justify-center items-center rounded-full border border-slate-200 hover:border-pink-500 hover:bg-pink-50 transition"
              href="https://instagram.com/i.karakhanli"
            >
              <Instagram class="w-5 h-5 text-pink-600" />
            </a>
          </li>
          <li>
            <a
              class="p-2 flex justify-center items-center rounded-full border border-slate-200 hover:border-sky-500 hover:bg-sky-50 transition"
              href="https://www.linkedin.com/in/inal-karakhanli/"
            >
              <Linkedin class="w-5 h-5 text-sky-500" />
            </a>
          </li>
          <li>
            <a
              class="p-2 flex justify-center items-center rounded-full border border-slate-200 hover:border-slate-900 hover:bg-slate-100 transition"
              href="https://github.com/nickforhuman"
            >
              <Github class="w-5 h-5 text-slate-700" />
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
import { Github, Instagram, Linkedin } from 'lucide-vue-next'
import PortfolioComponent from '@/components/PortfolioComponent.vue'
import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const introElements = gsap.utils.toArray<HTMLElement>('[data-intro]')

  introElements.forEach((el, i) => {
    gsap.fromTo(
      el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      },
    )
  })
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill())
})
</script>
