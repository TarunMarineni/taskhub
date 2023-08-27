import mongoose from 'mongoose'

export default defineNitroPlugin(() => {
  try {
    mongoose.connect('mongodb://127.0.0.1/nuxt-mongoose')
      .then(() => {
        console.log('Mongodb is connected')
      })
  } catch (err) {
    console.log(err)
  }
})