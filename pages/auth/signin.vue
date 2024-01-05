<template>
  <UContainer class="w-auto h-screen grid grid-cols-1 lg:grid-cols-2 p-2">
    <UCard class="">
      <template #header> Signin </template>

      <UForm id="form" :state="formState" class="" @submit="submitHandler">
        <UFormGroup label="Email" class="">
          <UInput
            v-model="formState.email"
            type="email"
            requiredå
            placeholder="tarun@gmail.com"
            class=""
          />
        </UFormGroup>

        <UFormGroup label="Password" class="">
          <UInput
            v-model="formState.password"
            type="password"
            required
            placeholder="tarun@gmail.com"
            class=""
          />
        </UFormGroup>

        <UButton type="submit" class="text-center"> Submit </UButton>
        <UButton><NuxtLink to="/auth/signup">Signup</NuxtLink></UButton>
      </UForm>
    </UCard>
    <div
      class="hidden lg:block h-full w-full bg-no-repeat bg-center"
      :style="{ 'background-image': `url('/18-06.png')` }"
    ></div>
  </UContainer>
</template>

<script setup>
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const formState = ref({
  email: "",
  password: "",
});

const dataHere = ref({});

const auth = getAuth();
const submitHandler = (event) => {
  const { email, password } = event.data;

  setPersistence(auth, browserSessionPersistence).then(() => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials;

        const userUid = auth.currentUser.uid;

        useRouter().push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .catch((error) => {
        // Handle persistence configuration errors
      });
  });
};

// definePageMeta({
//   middleware: "auth",
// });
</script>
