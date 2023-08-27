// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-mongoose',
  ],

  mongoose: {
    uri: 'mongodb://localhost:27017',
    options: {},
    modelsDir: 'models',
  },
})
