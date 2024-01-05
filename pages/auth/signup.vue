<template>
  <UContainer class="w-auto h-screen grid grid-cols-1 lg:grid-cols-2 p-2">
    <UCard class="">
      <template #header> Signup Form </template>

      <UForm id="form" :state="formState" class="" @submit="submitHandler">
        <UFormGroup label="Email" class="">
          <UInput v-model="formState.email" type="email" requiredå class="" />
        </UFormGroup>

        <UFormGroup label="Password" class="">
          <UInput
            v-model="formState.password"
            type="password"
            required
            class=""
          />
        </UFormGroup>

        <UButton type="submit" class="text-center"> Submit </UButton>
        <UButton><NuxtLink to="/auth/signin">Signin</NuxtLink></UButton>
      </UForm>
    </UCard>
  </UContainer>
</template>

<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const formState = ref({
  email: "",
  password: "",
});

const dataHere = ref({});

const auth = getAuth();
const submitHandler = (event) => {
  const { email, password } = event.data;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;

      const userUid = auth.currentUser.uid;

      useRouter().push("/tasks");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
</script>
