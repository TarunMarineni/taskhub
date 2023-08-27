import { defineMongooseConnection } from '#nuxt/mongoose'

export default defineNitroPlugin((nitroApp) => {
  defineMongooseConnection('mongodb://127.0.0.1/nuxt-mongoose')
})