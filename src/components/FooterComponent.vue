<template>
  <footer class="w-full border-t border-slate-200 bg-white">
    <div
      class="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
    >
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-2xl bg-secondary p-1.5 shadow-md shadow-secondary/30">
          <img
            src="@/assets/images/logo/logo.png"
            alt="logo"
            class="w-full h-full object-contain rounded-xl"
          />
        </div>
        <div class="flex flex-col">
          <span class="text-sm font-semibold text-slate-900">Inal Garali</span>
          <span class="text-[11px] text-slate-500">
            Building modern web & mobile applications, expert systems & automations.
          </span>
        </div>
      </div>

      <!-- center: quick links -->
      <nav class="text-xs md:text-sm">
        <ul class="flex flex-wrap items-center gap-3 md:gap-4">
          <li>
            <router-link to="/" class="text-slate-600 hover:text-secondary transition">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/resume" class="text-slate-600 hover:text-secondary transition">
              Resume
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="text-slate-600 hover:text-secondary transition">
              Contact
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-3 justify-start md:justify-end">
        <a
          href="https://instagram.com/i.karakhanli"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 hover:border-pink-500 hover:bg-pink-50 text-slate-500 hover:text-pink-500 transition"
        >
          <Instagram class="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com/in/inal-karakhanli"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 hover:border-sky-500 hover:bg-sky-50 text-slate-500 hover:text-sky-500 transition"
        >
          <Linkedin class="w-4 h-4" />
        </a>
        <a
          href="https://github.com/nickforhuman"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 hover:border-slate-700 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition"
        >
          <Github class="w-4 h-4" />
        </a>

        <button
          @click="scrollTop"
          class="ml-1 inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary/10 border border-secondary/40 text-secondary hover:bg-secondary hover:text-white transition"
        >
          <ArrowUp class="w-4 h-4" />
        </button>
      </div>
    </div>

    <div class="border-t border-slate-200 bg-slate-50/70">
      <div
        class="max-w-5xl mx-auto px-4 py-3 flex flex-col md:flex-row gap-2 md:items-center md:justify-between"
      >
        <p class="text-[11px] text-slate-500">
          © {{ new Date().getFullYear() }} Inal Garali. All rights reserved.
        </p>
        <p class="text-[11px] text-slate-500">
          Code by <span class="text-pink-500">♥</span> Inal Garali.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Instagram, Linkedin, Github, ArrowUp } from 'lucide-vue-next'

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
