<template>
  <div class="w-screen h-screen flex bg-white">
    <div class="h-full w-full justify-center items-center bg-white">
      <UCard class="h-full w-full flex flex-col justify-center items-center">
        <template #header> Signin </template>

        <div class="w-96">
          <UForm id="form" :state="formState" class="" @submit="submitHandler">
            <UFormGroup label="Email" class="my-4">
              <UInput
                v-model="formState.email"
                type="email"
                requiredå
                placeholder="tarun@gmail.com"
                class=""
              />
            </UFormGroup>

            <UFormGroup label="Password" class="my-4">
              <UInput
                v-model="formState.password"
                type="password"
                required
                placeholder="tarun@gmail.com"
                class=""
              />
            </UFormGroup>

            <div class="w-full my-4">
              <UButton type="submit" :block="true" class="w-full">
                Submit
              </UButton>
            </div>
          </UForm>
          <UDivider label="New User?" color="gray" class="my-4" />

          <UButton :block="true" class="">
            <NuxtLink to="/auth/signup" class="w-full text-center"
              >Signup</NuxtLink
            >
          </UButton>
        </div>
      </UCard>
    </div>

    <div
      class="h-full md:block bg-white hidden rounded-md w-full bg-no-repeat bg-center"
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

const router = useRouter();
const auth = getAuth();

const formState = ref({
  email: "",
  password: "",
});

const submitHandler = async (event) => {
  const { email, password } = event.data;

  setPersistence(auth, browserSessionPersistence).then(() => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        router.push("/");
      })
      .catch((error) => {
        console.log("sign-in error:", error.message);
      });
  });

  router.replace("/");
};
</script>
