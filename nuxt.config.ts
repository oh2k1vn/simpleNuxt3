// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@morev/vue-transitions/nuxt",
    "@nuxtjs/i18n",
  ],
  tailwindcss: { exposeConfig: true },
  i18n: {
    vueI18n: "./plugins/i18n.config.js",
    locales: [
      {
        code: "en",
        name: "English(US)",
      },
      {
        code: "vi",
        name: "vietnamese(VN)",
      },
    ],
    defaultLocale: "vi",
  },
  headlessui: { prefix: "H" },
  app: {
    head: {
      title: "Analytics",
      link: [
        // Favicon
        { rel: "icon", type: "image/x-icon", href: "/icon.svg" },
        //Inter font
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
      ],
    },
  },
});
