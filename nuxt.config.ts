import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  buildModules: ['@nuxtjs/tailwindcss'],
  build: {
  },
  head: {
    css: ['@/assets/css/tailwind.css', '@/assets/css/main.css'],
    title: 'Archive',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    apiURL: 'http://localhost:8080',
    discordURL: 'https://discord.gg/k8RcgxpnBS'
  },

})
