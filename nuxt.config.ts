// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Asema",
      meta: [{ name: "description", content: "Un univers fantastique pour du jeu de rôle sur table" }],
      htmlAttrs: {
        lang: "ch-fr"
      }
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content']
})