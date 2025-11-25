<template>
  <section class="w-full flex flex-col justify-center items-center min-h-screen bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 py-16 space-y-8">
      <header
        data-resume
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <div class="flex items-center gap-4">
          <div
            class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-sky-500 p-[2px]"
          >
            <div
              class="w-full h-full rounded-2xl bg-[url('@/assets/images/me.jpg')] bg-center bg-cover"
            ></div>
          </div>
          <div data-resume>
            <h1 class="text-2xl md:text-3xl font-bold text-slate-900">İnal Garali</h1>
            <p class="text-sm text-slate-600">
              Full-stack Developer · Web & Mobile · Expert Systems · Automation
            </p>
            <div class="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
              <span class="inline-flex items-center gap-1">
                <MapPin class="w-3 h-3" />
                Türkiye · Remote
              </span>
              <span class="inline-flex items-center gap-1">
                <Calendar class="w-3 h-3" />
                3+ years experience
              </span>
            </div>
          </div>
        </div>

        <div
          data-resume
          class="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-[11px] md:text-xs"
        >
          <a
            href="mailto:inal.kharayev@outlook.com"
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 text-slate-700 hover:border-secondary hover:text-secondary bg-white transition"
          >
            <Mail class="w-3 h-3" />
            inal.kharayev@outlook.com
          </a>
          <div data-resume class="flex items-center gap-2">
            <a
              href="https://github.com/nickforhuman"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-700 hover:border-slate-400 transition"
            >
              <Github class="w-3 h-3" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/inal-karakhanli"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-700 hover:border-slate-400 transition"
            >
              <Linkedin class="w-3 h-3" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <div data-resume class="grid md:grid-cols-3 gap-6">
        <div
          class="md:col-span-2 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-lg p-5 shadow-sm"
        >
          <h2 class="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
            <Sparkles class="w-4 h-4" />
            Summary
          </h2>
          <p class="text-sm text-slate-700 leading-relaxed">
            I’m a full-stack developer focused on building modern web & mobile applications, expert
            systems and business automations. Strong background with Vue, Rust backends, Tailwind UI
            and data-driven products (crypto analytics, dashboards, internal tools).
          </p>
        </div>

        <div
          data-resume
          class="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-lg p-5 flex flex-col gap-3 shadow-sm"
        >
          <h2 class="text-sm font-semibold text-primary mb-1 flex items-center gap-2">
            <Star class="w-4 h-4" />
            Highlights
          </h2>
          <ul class="space-y-1.5 text-[12px] text-slate-700">
            <li>• Crypto & finance-oriented dashboards (Economirror)</li>
            <li>• Legal service & booking platforms (Legium)</li>
            <li>• Food ordering & e-commerce (WooFood)</li>
            <li>• Design-driven portfolio & landing pages</li>
          </ul>
        </div>
      </div>

      <div data-resume class="grid md:grid-cols-3 gap-6">
        <div class="md:col-span-2 space-y-4">
          <h2 class="text-sm font-semibold text-primary flex items-center gap-2">
            <Briefcase class="w-4 h-4" />
            Experience
          </h2>

          <div
            v-for="(item, index) in experiences"
            :key="index"
            class="relative pl-5 pb-5 border-l border-slate-200 last:pb-0"
          >
            <!-- dot -->
            <div
              class="absolute -left-[7px] mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-sky-500"
            ></div>

            <div class="flex justify-between items-start gap-2">
              <div>
                <h3 class="text-sm font-semibold text-slate-900">
                  {{ item.role }}
                </h3>
                <p class="text-[12px] text-slate-500">{{ item.company }} · {{ item.type }}</p>
              </div>
              <span class="text-[11px] text-slate-500">
                {{ item.period }}
              </span>
            </div>

            <p class="mt-2 text-[13px] text-slate-700">
              {{ item.desc }}
            </p>

            <div class="mt-2 flex flex-wrap gap-1.5">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="px-2 py-0.5 rounded-full bg-slate-100 text-[11px] text-slate-700"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <div data-resume class="space-y-4">
          <div
            class="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-lg p-4 space-y-3 shadow-sm"
          >
            <h2 class="text-sm font-semibold text-primary flex items-center gap-2">
              <Code2 class="w-4 h-4" />
              Tech stack
            </h2>
            <div v-for="category in skills" :key="category.label" class="space-y-1">
              <p class="text-[11px] uppercase tracking-wide text-slate-500">
                {{ category.label }}
              </p>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="skill in category.items"
                  :key="skill"
                  class="px-2 py-0.5 rounded-full bg-slate-100 text-[11px] text-slate-800"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>

          <div
            class="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-lg p-4 space-y-2 shadow-sm"
          >
            <h2 class="text-sm font-semibold text-primary flex items-center gap-2">
              <GraduationCap class="w-4 h-4" />
              Education
            </h2>
            <div class="space-y-1">
              <p class="text-sm text-slate-900">Self-taught & continuous learning</p>
              <p class="text-[12px] text-slate-600">
                Rust backend, modern JavaScript frameworks, system design, AI & data pipelines.
              </p>
              <p class="text-[11px] text-slate-500">
                + Dozens of online courses, documentation-driven learning and real projects.
              </p>
            </div>
          </div>

          <div
            class="rounded-2xl border border-emerald-200 bg-emerald-50/90 backdrop-blur-lg p-4 flex items-center gap-3 shadow-sm"
          >
            <div
              class="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center shadow shadow-emerald-500/40"
            >
              <Clock class="w-4 h-4 text-white" />
            </div>
            <div class="flex flex-col">
              <span class="text-sm text-emerald-800">Available for freelance & remote work</span>
              <span class="text-[11px] text-emerald-700/80">
                Ideal for long-term products, dashboards and automation projects.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Briefcase,
  Calendar,
  Clock,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Star,
} from 'lucide-vue-next'
import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    role: 'Founder · Full-stack Developer',
    company: 'Economirror',
    type: 'Product / SaaS',
    period: '2024 – Present',
    desc: 'Design and development of a crypto analytics platform with multi-exchange data ingestion, technical indicators and modern dashboard UI.',
    tags: ['Rust', 'PostgreSQL', 'Vue 3', 'Tailwind', 'Crypto'],
  },
  {
    role: 'Full-stack Developer',
    company: 'Legium',
    type: 'Freelance',
    period: '2023 – Present',
    desc: 'Legal services platform with booking, content pages and a clean UX focused on clarity and trust.',
    tags: ['Vue', 'SSR', 'UI Design', 'SEO'],
  },
  {
    role: 'Frontend / Product Developer',
    company: 'WooFood',
    type: 'Side project',
    period: '2022 – 2023',
    desc: 'Food ordering web app with product catalog, cart flow and responsive layout for local businesses.',
    tags: ['SPA', 'Tailwind', 'Responsive UI'],
  },
]

const skills = [
  {
    label: 'Frontend',
    items: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Svelte (basic)', 'Component design'],
  },
  {
    label: 'Backend',
    items: ['Rust', 'REST APIs', 'PostgreSQL', 'Auth', 'Data ingestion'],
  },
  {
    label: 'Tools & Other',
    items: ['Git', 'Linux / Ubuntu', 'Nginx', 'Docker (basic)', 'Figma / UI thinking'],
  },
]

// animate
onMounted(() => {
  const resumeElements = gsap.utils.toArray<HTMLElement>('[data-resume]')

  resumeElements.forEach((el, i) => {
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
