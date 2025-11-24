<template>
  <!-- intro start  -->
  <div
    class="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
  >
    <div class="flex flex-col justify-center items-center gap-6 px-4">
      <!-- avatar + gradient border -->
      <div
        class="relative p-[3px] rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-sky-500 shadow-xl shadow-sky-900/40"
      >
        <div
          class="w-36 h-36 bg-[url('@/assets/images/me.jpg')] bg-center bg-cover rounded-full"
        ></div>

        <!-- name badge with gradient text -->
        <span
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
        <ul class="flex justify-center items-center gap-3 py-6">
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
              href=""
            >
              <Instagram class="w-5 h-5 text-pink-600" />
            </a>
          </li>
          <li>
            <a
              class="p-2 flex justify-center items-center rounded-full border border-white hover:border-sky-500 hover:bg-sky-500/10 transition"
              href=""
            >
              <Linkedin class="w-5 h-5 text-blue-400" />
            </a>
          </li>
          <li>
            <a
              class="p-2 flex justify-center items-center rounded-full border border-white hover:border-zinc-900 hover:bg-zinc-900/10 transition"
              href=""
            >
              <Github class="w-5 h-5 text-gray-400" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- intro end  -->
  <!-- portfolio start  -->
  <section id="projects" class="w-full py-12 bg-slate-950/80">
    <div class="max-w-5xl mx-auto px-4">
      <!-- header start  -->
      <div class="flex justify-between items-end gap-4 mb-6">
        <div class="flex items-center gap-3">
          <div class="p-2 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-sky-500/80">
            <Globe class="w-6 h-6 text-slate-950" />
          </div>
          <div>
            <h1 class="text-2xl md:text-3xl font-bold text-secondary">Web Projects</h1>
            <p class="text-sm text-slate-400">Selected client work & personal builds</p>
          </div>
        </div>

        <span
          class="hidden md:inline-flex items-center text-xs px-3 py-1 rounded-full border border-slate-700 text-slate-300"
        >
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
          Available for freelance work
        </span>
      </div>
      <!-- header end  -->

      <!-- cards start  -->
      <div class="grid gap-5 md:grid-cols-2">
        <!-- card start  -->
        <article
          v-for="(card, index) in webCardItems"
          :key="index"
          class="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
        >
          <!-- preview alanı -->
          <div
            class="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-[11px] tracking-[0.2em] text-slate-500"
          >
            PROJECT PREVIEW
          </div>

          <div class="p-4 flex flex-col gap-3">
            <div class="flex items-center justify-between gap-2">
              <h2 class="font-semibold text-secondary text-lg">
                {{ card.title }}
              </h2>
              <span
                class="text-[10px] px-2 py-1 rounded-full bg-slate-800 text-slate-300 uppercase tracking-wide"
              >
                {{ card.projecttype }}
              </span>
            </div>

            <p class="text-sm text-slate-300">
              {{ card.desc }}
            </p>

            <div class="flex flex-wrap gap-2 text-[11px]">
              <span
                v-for="tech in card.tech"
                :key="tech"
                class="px-2 py-1 rounded-full bg-slate-800 text-slate-200"
              >
                {{ tech }}
              </span>
            </div>

            <div class="mt-2 flex items-center gap-3">
              <a
                v-if="card.link"
                :href="card.link.startsWith('http') ? card.link : 'https://' + card.link"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-slate-950 hover:bg-secondary/90 transition"
              >
                Live demo
                <ExternalLink class="w-3 h-3" />
              </a>
              <a
                v-if="card.githublink"
                :href="card.githublink"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-600 text-slate-200 hover:border-slate-300 transition"
              >
                <Github class="w-3 h-3" />
                Code
              </a>
            </div>
          </div>

          <!-- hover alt çizgi -->
          <div
            class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 opacity-0 group-hover:opacity-100 transition"
          ></div>
        </article>
        <!-- card end  -->
      </div>
      <!-- cards end  -->
    </div>
  </section>
  <!-- portfolio end  -->
</template>

<script setup lang="ts">
import { Instagram, Linkedin, Github, Globe, ExternalLink } from 'lucide-vue-next'
import { ref } from 'vue'

const webCardItems = ref([
  {
    title: 'Economirror',
    projecttype: 'SaaS',
    desc: 'Real-time crypto analytics platform with custom indicators, AI-driven insights and responsive admin UI.',
    tech: ['Vue.js', 'Tailwindcss', 'Rust'],
    link: 'https://economirror.com',
    githublink: 'https://github.com/economirror-main/',
  },
  {
    title: 'Economirror',
    projecttype: 'SaaS',
    desc: 'Real-time crypto analytics platform with custom indicators, AI-driven insights and responsive admin UI.',
    tech: ['Vue.js', 'Tailwindcss', 'Rust'],
    link: 'https://economirror.com',
    githublink: 'https://github.com/economirror-main/',
  },
  {
    title: 'Economirror',
    projecttype: 'SaaS',
    desc: 'Real-time crypto analytics platform with custom indicators, AI-driven insights and responsive admin UI.',
    tech: ['Vue.js', 'Tailwindcss', 'Rust'],
    link: 'https://economirror.com',
    githublink: 'https://github.com/economirror-main/',
  },
  {
    title: 'Economirror',
    projecttype: 'SaaS',
    desc: 'Real-time crypto analytics platform with custom indicators, AI-driven insights and responsive admin UI.',
    tech: ['Vue.js', 'Tailwindcss', 'Rust'],
    link: 'https://economirror.com',
    githublink: 'https://github.com/economirror-main/',
  },
])
</script>
