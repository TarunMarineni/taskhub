<template>
  <div class="w-screen h-screen flex bg-[#53B982]">
    <div class="h-full w-full justify-center items-center">
      <UCard
        class="h-full w-full p-4 md:p-0 bg-[#53B982] flex flex-col justify-center items-center"
      >
        <template #header> Signup </template>

        <div class="w-96">
          <UForm
            id="form"
            :state="formState"
            class="z-0"
            @submit="submitHandler"
          >
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

          <UDivider label="Already a member?" color="gray" class="my-4" />

          <UButton :block="true" class="">
            <NuxtLink to="/auth/signin" class="w-full text-center"
              >Signin</NuxtLink
            >
          </UButton>
        </div>
      </UCard>
    </div>

    <div
      class="h-full md:block hidden w-full bg-no-repeat bg-center"
      :style="{ 'background-image': `url('/hero-04.png')` }"
    ></div>
  </div>
</template>

<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const router = useRouter();
const auth = getAuth();

const formState = ref({
  email: "",
  password: "",
});

const submitHandler = async (event) => {
  const { email, password } = event.data;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      router.replace("/");
    })
    .catch((error) => {
      console.log("sign-up error:", error.message);
    });
};
</script>
