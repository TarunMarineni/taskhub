<template>
  <div class="w-full h-14 flex justify-center items-center">
    <div @click="logOut" class="rounded-full w-10 h-10 cursor-pointer bg-slate-300"></div>
  </div>
  <slot />
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth";

const logOut =() => {
  signOut(getAuth()).then(() => {
    console.log('Bye bye!!')
    useRouter().push('/auth/signin')
  }).catch((error) => {
    console.log(error.message)
  });
}
</script>


