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

  modules: ['@nuxt/content', "@nuxt/image"],
  devtools: { enabled: true },
  compatibilityDate: "2025-03-17",
})