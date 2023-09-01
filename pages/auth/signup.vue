<template>
  <div class="w-full h-screen flex justify-center items-center">
    <FormKit 
      type="form"
      :actions="false"
      @submit="submitForm"
      :config="{
        classes: {
          message: 'text-sm text-red-600',
        }
      }"
    >
      <FormKit
        type="email"
        name="email"
        placeholder="Email"
        validation="required | email"
        :config="{
          classes: {
            input: 'border-gray-600 border-2 p-2 rounded-sm w-full',
            outer: 'mb-4',
            message: 'text-sm text-red-600'
          }
        }"
      />
      <FormKit
        type="password"
        name="password"
        placeholder="Password"
        validation="required"
        :config="{
          classes:{
            input: 'border-gray-600 border-2 p-2 rounded-sm w-full',
            message: 'text-sm text-red-600',
            outer: 'mb-4'
          }
        }"
      />
      <FormKit 
        type="submit"
        name="sumbit"
        value="submit"
        label="signup"
        :config="{
          classes:{
            input: 'w-full -auto bg-black text-center p-3 text-white mb-4 rounded-sm uppercase',
          }
        }"
      />
    </FormKit>
  </div>
</template>

<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const submitForm = async (value) => {
  const { email, password } = value

  const auth = getAuth()
  const router = useRouter()

  createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    router.push('/todo')
  })
  .catch((error) =>{
    console.error(error)
  })
}
</script>