<template>
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
            <img :src="card.image" alt="" />
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
import { Github, Globe, ExternalLink } from 'lucide-vue-next'
import { ref } from 'vue'

const webCardItems = ref([
  {
    image: new URL('@/assets/images/portfolio/newser.png', import.meta.url).href,
    title: 'NEWSER',
    projecttype: 'Blog',
    desc: 'A dynamic news platform where you can follow the latest stories, trending topics, and in-depth analyses all in one modern, easy-to-use website.',
    tech: ['Vue.js', 'Tailwindcss'],
    link: 'https://newser-k3mx.onrender.com/',
    githublink: 'https://github.com/nickforhuman/newser',
  },
])
</script>
