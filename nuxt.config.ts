// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
      },
    },
  },

  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "nuxt-icon"],

  components: {
    dirs: ["~/components/pages", "~/components/parts"],
  },

  devtools: { enabled: true },
});
