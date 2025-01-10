// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '../nuxt-layer'
  ],
  unocss: {
    nuxtLayers: true
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
