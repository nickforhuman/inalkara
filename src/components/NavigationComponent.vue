<template>
  <!-- top nav -->
  <nav
    data-navigation
    class="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
  >
    <div class="max-w-5xl mx-auto px-4 flex justify-between md:justify-between items-center py-2">
      <!-- logo start  -->
      <div data-navigation class="flex items-center gap-2">
        <router-link to="/">
          <img
            src="@/assets/images/logo/logo.png"
            class="w-10 h-10 bg-secondary p-1.5 rounded-2xl shadow-lg shadow-secondary/30"
            alt="logo"
          />
        </router-link>
        <span class="hidden sm:inline text-sm font-semibold tracking-wide text-secondary">
          Inal Garali
        </span>
      </div>
      <!-- logo end  -->

      <!-- desktop nav -->
      <div class="hidden md:flex justify-center items-center">
        <ul data-navigation class="flex justify-center items-center gap-2 m-2">
          <li>
            <router-link
              class="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide text-secondary/90 hover:text-secondary bg-transparent hover:bg-secondary/10 transition-all"
              to="/"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              class="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide text-secondary/90 hover:text-secondary bg-transparent hover:bg-secondary/10 transition-all"
              to="/resume"
            >
              Resume
            </router-link>
          </li>
          <li>
            <router-link
              class="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide text-secondary/90 hover:text-secondary bg-transparent hover:bg-secondary/10 transition-all"
              to="/contact"
            >
              Contact
            </router-link>
          </li>
        </ul>
      </div>

      <!-- mobile menu button -->
      <div data-navigation class="md:hidden flex justify-center items-center m-1">
        <button
          @click="sidebarToggle()"
          class="inline-flex items-center justify-center px-3 py-2 bg-secondary/20 border border-secondary/30 backdrop-blur-md rounded-3xl active:scale-95 transition"
        >
          <Ellipsis class="text-danger w-5 h-5" />
        </button>
      </div>
    </div>
  </nav>

  <!-- mobile sidebar start -->
  <transition name="slide">
    <div v-if="isSidebar" class="fixed inset-0 z-50 flex">
      <!-- overlay -->
      <div class="flex-1 bg-black/50 backdrop-blur-sm" @click="sidebarToggle()"></div>

      <!-- panel -->
      <aside
        class="w-72 sm:w-80 h-full bg-slate-950/95 border-l border-white/10 backdrop-blur-2xl flex flex-col justify-between shadow-2xl"
      >
        <!-- header + nav -->
        <div>
          <div class="flex items-center justify-between px-4 pt-4 pb-2">
            <div class="flex items-center gap-2">
              <img
                src="@/assets/images/logo/logo.png"
                class="w-9 h-9 bg-secondary p-1.5 rounded-2xl"
                alt="logo"
              />
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-secondary">Inal Garali</span>
                <span class="text-[11px] text-slate-400">Fullstack Developer</span>
              </div>
            </div>
            <button
              @click="sidebarToggle()"
              class="inline-flex items-center justify-center p-2 rounded-full border border-slate-700 text-slate-300 hover:border-secondary hover:text-secondary transition"
            >
              <MoveLeft class="w-4 h-4" />
            </button>
          </div>

          <ul class="mt-4 space-y-1 px-2">
            <li>
              <router-link
                @click="sidebarToggle()"
                to="/"
                class="flex items-center px-4 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-secondary/15 hover:text-secondary transition"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                @click="sidebarToggle()"
                to="/resume"
                class="flex items-center px-4 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-secondary/15 hover:text-secondary transition"
              >
                Resume
              </router-link>
            </li>
            <li>
              <router-link
                @click="sidebarToggle()"
                to="/contact"
                class="flex items-center px-4 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-secondary/15 hover:text-secondary transition"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- whatsapp / footer -->
        <div class="border-t border-slate-800 px-4 py-4">
          <a
            href="https://wa.me/994706062448"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-sm font-medium text-emerald-200 hover:bg-emerald-500/20 transition"
          >
            <img src="@/assets/images/media/wp.png" class="w-6 h-6" alt="whatsapp" />
            <span>Whatsapp ile iletişime geç</span>
          </a>

          <p class="mt-3 text-[10px] text-slate-500">Available for freelance / remote projects.</p>
        </div>
      </aside>
    </div>
  </transition>
  <!-- mobile sidebar end  -->
</template>

<script setup lang="ts">
import { Ellipsis, MoveLeft } from 'lucide-vue-next'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const isSidebar = ref(false)

const sidebarToggle = () => {
  isSidebar.value = !isSidebar.value
}

onMounted(() => {
  const navigationElements = gsap.utils.toArray<HTMLElement>('[data-navigation]')

  navigationElements.forEach((el, i) => {
    gsap.fromTo(
      el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: i * 0.2,
        scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' },
      },
    )
  })
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill())
})
</script>
