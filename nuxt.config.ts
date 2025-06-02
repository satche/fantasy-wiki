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
    pageTransition: { name: 'fade', mode: 'out-in' }
  },

  css: ["~/assets/css/index.css"],
  icon: {
    serverBundle: {
      collections: ["pixelarticons"]
    }
  },

  modules: ['@nuxt/content', "@nuxt/image", "@nuxt/icon"],

  nitro: {
    plugins: ['~/scripts/copy-content-images']
  },

  devtools: { enabled: true },
  compatibilityDate: "2025-03-17",
})