import mongoose from "mongoose"

export default defineNitroPlugin((nitroApp) => {
  try {
    mongoose.connect('mongodb://localhost:27017')
      .then(() => {
        console.log('Mongodb is connected')
      })
  } catch (err) {
    console.log(err)
  }
})