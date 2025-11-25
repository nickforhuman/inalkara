<template>
  <!-- portfolio start  -->
  <section id="projects" class="w-full py-12 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4">
      <!-- header start  -->
      <div class="flex justify-between items-end gap-4 mb-6">
        <div class="flex items-center gap-3">
          <div class="p-2 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-sky-500/80">
            <FolderKanban class="w-6 h-6 text-white" />
          </div>
          <div>
            <h1
              class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent"
            >
              Portfolio
            </h1>
            <p class="text-sm text-slate-500">Selected client work & personal builds</p>
          </div>
        </div>

        <span
          class="hidden md:inline-flex items-center text-xs px-3 py-1 rounded-full border border-slate-200 text-slate-500 bg-white/80"
        >
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
          Available for freelance work
        </span>
      </div>
      <!-- header end  -->

      <!-- category filter start -->
      <div class="mb-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="selectedCategory = cat.id"
          class="relative rounded-2xl p-[1px] transition-transform hover:-translate-y-0.5"
          :class="
            selectedCategory === cat.id
              ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500'
              : 'bg-slate-200'
          "
        >
          <div
            class="flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-xs font-medium"
            :class="
              selectedCategory === cat.id ? 'bg-white text-slate-900' : 'bg-slate-50 text-slate-600'
            "
          >
            <span
              v-if="selectedCategory === cat.id"
              class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"
            ></span>
            <span>{{ cat.label }}</span>
          </div>
        </button>
      </div>
      <!-- category filter end -->

      <!-- cards start  -->
      <div class="grid gap-5 md:grid-cols-2">
        <!-- card start  -->
        <article
          v-for="(card, index) in filteredProjects"
          :key="index"
          class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/70 via-purple-500/70 to-sky-500/70 p-[1px] shadow-md hover:shadow-xl hover:-translate-y-1 transition"
        >
          <div class="rounded-2xl bg-white/95 backdrop-blur flex flex-col h-full">
            <!-- preview alanı -->
            <div
              class="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-[11px] tracking-[0.2em] text-slate-400"
            >
              <img :src="card.image" alt="" class="w-full h-full object-cover" />
            </div>

            <div class="p-4 flex flex-col gap-3 flex-1">
              <div class="flex items-center justify-between gap-2">
                <h2
                  class="font-semibold text-lg bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent"
                >
                  {{ card.title }}
                </h2>
                <span
                  class="text-[10px] px-2 py-1 rounded-full bg-slate-100 text-slate-600 uppercase tracking-wide"
                >
                  {{ card.projecttype }}
                </span>
              </div>

              <p class="text-sm text-slate-700">
                {{ card.desc }}
              </p>

              <div class="flex flex-wrap gap-2 text-[11px]">
                <span
                  v-for="tech in card.tech"
                  :key="tech"
                  class="px-2 py-1 rounded-full bg-slate-100 text-slate-700"
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
                  class="inline-flex border border-gray-300 items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-primary hover:bg-secondary/90 transition"
                >
                  Live demo
                  <ExternalLink class="w-3 h-3" />
                </a>
                <a
                  v-if="card.githublink"
                  :href="card.githublink"
                  target="_blank"
                  rel="noreferrer"
                  class="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-300 text-slate-700 hover:border-slate-500 transition"
                >
                  <Github class="w-3 h-3" />
                  Code
                </a>
              </div>
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
import { Github, FolderKanban, ExternalLink } from 'lucide-vue-next'
import { ref, computed } from 'vue'

const categories = [
  { id: 'all', label: 'All projects' },
  { id: 'web', label: 'Websites' },
  { id: 'mobile', label: 'Mobile applications' },
  { id: 'expert', label: 'Expert systems' },
  { id: 'automation', label: 'Business automations' },
]

const selectedCategory = ref<'all' | 'web' | 'mobile' | 'expert' | 'automation'>('all')

const projects = ref([
  {
    image: new URL('@/assets/images/portfolio/newser.png', import.meta.url).href,
    title: 'NEWSER',
    projecttype: 'Website',
    category: 'web',
    desc: 'A dynamic news platform where you can follow the latest stories, trending topics, and in-depth analyses in a clean UX.',
    tech: ['Vue.js', 'Tailwind CSS'],
    link: 'https://newser-k3mx.onrender.com/',
    githublink: 'https://github.com/nickforhuman/newser',
  },
  {
    image: new URL('@/assets/images/portfolio/newser.png', import.meta.url).href,
    title: 'WooFood',
    projecttype: 'Mobile-friendly',
    category: 'mobile',
    desc: 'Food ordering experience optimized for mobile users with fast navigation and clear call-to-actions.',
    tech: ['Vue.js', 'Tailwind CSS'],
    link: '#',
    githublink: '#',
  },
  {
    image: new URL('@/assets/images/portfolio/newser.png', import.meta.url).href,
    title: 'Economirror',
    projecttype: 'Expert system',
    category: 'expert',
    desc: 'Crypto analytics & expert system prototype with data-driven dashboards and technical indicators.',
    tech: ['Rust', 'Vue.js', 'PostgreSQL'],
    link: '#',
    githublink: '#',
  },
  {
    image: new URL('@/assets/images/portfolio/newser.png', import.meta.url).href,
    title: 'Automation Suite',
    projecttype: 'Automation',
    category: 'automation',
    desc: 'Internal tools and automations to reduce repetitive tasks and streamline business workflows.',
    tech: ['Node.js', 'APIs', 'Automation'],
    link: '#',
    githublink: '#',
  },
])

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') return projects.value
  return projects.value.filter((p) => p.category === selectedCategory.value)
})
</script>
