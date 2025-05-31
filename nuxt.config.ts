// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Asema",
      meta: [{ name: "description", content: "Un univers fantastique pour du jeu de rôle sur table" }],
      htmlAttrs: {
        lang: "ch-fr"
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ["~/assets/css/index.css"],

  modules: ['@nuxt/content', "@nuxt/image"],

  nitro: {
    plugins: ['~/scripts/copy-content-images']
  },

  devtools: { enabled: true },
  compatibilityDate: "2025-03-17",
})