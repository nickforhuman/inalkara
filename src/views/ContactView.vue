<template>
  <section class="w-full flex flex-col justify-center items-center min-h-screen bg-slate-950/90">
    <div class="max-w-5xl mx-auto px-4 py-16">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div class="flex flex-col gap-6">
          <div>
            <h1 class="text-3xl md:text-4xl font-bold text-secondary mb-2">
              Let’s build something together
            </h1>
            <p class="text-sm md:text-base text-slate-300">
              Web & mobile projects, expert systems, business automation or just a quick question.
              Reach out anytime via e-mail or WhatsApp.
            </p>
          </div>

          <div
            class="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-lg p-4 flex items-center gap-4 hover:border-secondary/70 hover:-translate-y-0.5 transition"
          >
            <div
              class="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center"
            >
              <Mail class="w-5 h-5 text-slate-950" />
            </div>
            <div class="flex flex-col">
              <span class="text-xs uppercase tracking-wide text-slate-400">E-mail</span>
              <a
                href="mailto:inal.kharayev@outlook.com"
                class="text-sm md:text-base text-secondary hover:underline break-all"
              >
                inal.kharayev@outlook.com
              </a>
            </div>
          </div>

          <div
            class="rounded-2xl border border-emerald-700/60 bg-emerald-900/20 backdrop-blur-lg p-4 flex items-center gap-4 hover:border-emerald-400/80 hover:-translate-y-0.5 transition"
          >
            <div
              class="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow shadow-emerald-500/40"
            >
              <Phone class="w-5 h-5 text-slate-950" />
            </div>
            <div class="flex flex-col">
              <span class="text-xs uppercase tracking-wide text-emerald-300">WhatsApp</span>
              <a
                href="https://wa.me/994706062448"
                target="_blank"
                rel="noreferrer"
                class="text-sm md:text-base text-emerald-100 hover:underline"
              >
                +994 70 606 24 48
              </a>
              <span class="text-[11px] text-emerald-200/70">
                Usually replies within a few hours
              </span>
            </div>
          </div>

          <p class="text-[11px] text-slate-500">
            Prefer another channel? Feel free to DM me on any of the social platforms on the right.
          </p>
        </div>

        <div class="flex flex-col gap-6">
          <div
            class="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-lg p-5 flex flex-col gap-4"
          >
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-semibold text-secondary">Social media</h2>
              <span
                class="text-[11px] px-2 py-1 rounded-full border border-slate-700 text-slate-300"
              >
                Let’s connect
              </span>
            </div>

            <ul class="space-y-2">
              <li>
                <a
                  href="https://instagram.com/i.karakhanli"
                  target="_blank"
                  rel="noreferrer"
                  class="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-800/80 transition"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 flex items-center justify-center"
                    >
                      <Instagram class="w-4 h-4 text-slate-950" />
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm text-slate-100">Instagram</span>
                      <span class="text-[11px] text-slate-400">@i.karakhanli</span>
                    </div>
                  </div>
                  <Send class="w-4 h-4 text-slate-500" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/inal-karakhanli/"
                  target="_blank"
                  rel="noreferrer"
                  class="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-800/80 transition"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-xl bg-sky-500/90 flex items-center justify-center">
                      <Linkedin class="w-4 h-4 text-slate-950" />
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm text-slate-100">LinkedIn</span>
                      <span class="text-[11px] text-slate-400">Inal Garali</span>
                    </div>
                  </div>
                  <Send class="w-4 h-4 text-slate-500" />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/nickforhuman"
                  target="_blank"
                  rel="noreferrer"
                  class="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-800/80 transition"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center">
                      <Github class="w-4 h-4 text-slate-100" />
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm text-slate-100">GitHub</span>
                      <span class="text-[11px] text-slate-400">github.com/nickforhuman</span>
                    </div>
                  </div>
                  <Send class="w-4 h-4 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          <div
            class="rounded-2xl border border-slate-800 bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-800 p-4 flex items-center gap-3"
          >
            <div
              class="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center shadow shadow-secondary/40"
            >
              <MapPin class="w-4 h-4 text-slate-950" />
            </div>
            <div class="flex flex-col">
              <span class="text-sm text-slate-100">Based in Türkiye (UTC+3)</span>
              <span class="text-[11px] text-slate-400">Open to remote & international work</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Phone, Instagram, Linkedin, Github, Send, MapPin } from 'lucide-vue-next'
</script>
