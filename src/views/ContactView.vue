<template>
  <section class="w-full flex flex-col justify-center items-center min-h-screen bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 py-16">
      <div data-contact class="grid md:grid-cols-2 grid-cols-1 gap-10">
        <!-- left side -->
        <div class="flex flex-col gap-6">
          <div>
            <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Let’s build something together
            </h1>
            <p class="text-sm md:text-base text-slate-600">
              Web & mobile projects, expert systems, business automation or just a quick question.
              Reach out anytime via e-mail or WhatsApp.
            </p>
          </div>

          <!-- email card -->
          <div
            class="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-lg p-4 flex items-center gap-4 hover:border-secondary/70 hover:-translate-y-0.5 hover:shadow-md transition"
          >
            <div
              class="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center"
            >
              <Mail class="w-5 h-5 text-white" />
            </div>
            <div class="flex flex-col">
              <span class="text-xs uppercase tracking-wide text-slate-400">E-mail</span>
              <a
                href="mailto:inal.kharayev@outlook.com"
                class="text-sm md:text-base text-slate-900 hover:underline break-all"
              >
                inal.kharayev@outlook.com
              </a>
            </div>
          </div>

          <!-- whatsapp card -->
          <div
            class="rounded-2xl border border-emerald-200 bg-emerald-50/80 backdrop-blur-lg p-4 flex items-center gap-4 hover:border-emerald-400/80 hover:-translate-y-0.5 hover:shadow-md transition"
          >
            <div
              class="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow shadow-emerald-500/40"
            >
              <Phone class="w-5 h-5 text-white" />
            </div>
            <div class="flex flex-col">
              <span class="text-xs uppercase tracking-wide text-emerald-700">WhatsApp</span>
              <a
                href="https://wa.me/994706062448"
                target="_blank"
                rel="noreferrer"
                class="text-sm md:text-base text-emerald-800 hover:underline"
              >
                +994 70 606 24 48
              </a>
              <span class="text-[11px] text-emerald-700/70">
                Usually replies within a few hours
              </span>
            </div>
          </div>

          <p class="text-[11px] text-slate-500">
            Prefer another channel? Feel free to DM me on any of the social platforms on the right.
          </p>
        </div>

        <!-- right side -->
        <div class="flex flex-col gap-6">
          <!-- socials card -->
          <div
            class="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-lg p-5 flex flex-col gap-4 shadow-sm"
          >
            <div data-contact class="flex items-center justify-between">
              <h2 class="text-lg font-semibold text-slate-900">Social media</h2>
              <span
                class="text-[11px] px-2 py-1 rounded-full border border-slate-200 text-slate-500 bg-slate-50"
              >
                Let’s connect
              </span>
            </div>

            <ul data-contact class="space-y-2">
              <!-- Instagram -->
              <li>
                <a
                  href="https://instagram.com/i.karakhanli"
                  target="_blank"
                  rel="noreferrer"
                  class="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-100 transition"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 flex items-center justify-center"
                    >
                      <Instagram class="w-4 h-4 text-white" />
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm text-slate-900">Instagram</span>
                      <span class="text-[11px] text-slate-500">@i.karakhanli</span>
                    </div>
                  </div>
                  <Send class="w-4 h-4 text-slate-400" />
                </a>
              </li>

              <!-- LinkedIn -->
              <li>
                <a
                  href="https://www.linkedin.com/in/inal-karakhanli/"
                  target="_blank"
                  rel="noreferrer"
                  class="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-100 transition"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-xl bg-sky-500/90 flex items-center justify-center">
                      <Linkedin class="w-4 h-4 text-white" />
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm text-slate-900">LinkedIn</span>
                      <span class="text-[11px] text-slate-500">Inal Garali</span>
                    </div>
                  </div>
                  <Send class="w-4 h-4 text-slate-400" />
                </a>
              </li>

              <!-- GitHub -->
              <li>
                <a
                  href="https://github.com/nickforhuman"
                  target="_blank"
                  rel="noreferrer"
                  class="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-100 transition"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center">
                      <Github class="w-4 h-4 text-slate-100" />
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm text-slate-900">GitHub</span>
                      <span class="text-[11px] text-slate-500">github.com/nickforhuman</span>
                    </div>
                  </div>
                  <Send class="w-4 h-4 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          <!-- location card -->
          <div
            data-contact
            class="rounded-2xl border border-slate-200 bg-gradient-to-tr from-white via-slate-50 to-slate-100 p-4 flex items-center gap-3 shadow-sm"
          >
            <div
              class="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center shadow shadow-secondary/40"
            >
              <MapPin class="w-4 h-4 text-primary" />
            </div>
            <div class="flex flex-col">
              <span class="text-sm text-slate-900">Based in Türkiye (UTC+3)</span>
              <span class="text-[11px] text-slate-500">Open to remote & international work</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Phone, Instagram, Linkedin, Github, Send, MapPin } from 'lucide-vue-next'
import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const contactElements = gsap.utils.toArray<HTMLElement>('[data-contact]')
  contactElements.forEach((el, i) => {
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
