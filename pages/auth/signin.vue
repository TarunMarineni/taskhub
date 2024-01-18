<template>
  <div class="w-screen h-screen flex bg-white">
    <div class="h-full w-full justify-center items-center">
      <UCard class="h-full w-full flex flex-col justify-center items-center">
        <template #header> Signin </template>

        <div class="w-96 p-0 m-0">
          <UForm
            id="form"
            :state="signinState"
            class=""
            @submit="submitHandler"
          >
            <UFormGroup label="Email" class="my-4">
              <UInput
                v-model="signinState.email"
                type="email"
                requiredå
                class=""
              />
            </UFormGroup>

            <UFormGroup label="Password" class="my-4">
              <UInput
                v-model="signinState.password"
                type="password"
                required
                class=""
              />
            </UFormGroup>

            <div class="w-full my-4">
              <UButton type="submit" :block="true" class="w-full">
                Sigin
              </UButton>
            </div>
          </UForm>

          <UDivider label="New User?" color="gray" class="my-8" />

          <UButton :block="true">
            <NuxtLink to="/auth/signup" class="w-full text-center"
              >Signup</NuxtLink
            >
          </UButton>
        </div>
      </UCard>
    </div>

    <div
      class="h-full lg:block bg-white hidden p-0 m-0 rounded-md w-full bg-no-repeat bg-center"
      :style="{ 'background-image': `url('/18-06.png')` }"
    ></div>
  </div>
</template>

<script setup>
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { useTitle } from "@vueuse/core";

onMounted(() => {
  const title = useTitle("TaskHub | Signin");
});

const router = useRouter();
const auth = getAuth();

const signinState = ref({
  email: "",
  password: "",
});

const submitHandler = async (event) => {
  const { email, password } = event.data;

  setPersistence(auth, browserSessionPersistence).then(() => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("uid: ", userCredentials);
        router.push("/");
      })
      .catch((error) => {
        console.log("sign-in error:", error.message);
      });
  });

  router.replace("/");
};
</script>
