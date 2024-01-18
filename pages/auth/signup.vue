<template>
  <div class="w-screen h-screen flex">
    <div class="h-full w-full justify-center items-center">
      <UCard
        class="h-full w-full p-4 md:p-0 flex flex-col justify-center items-center"
      >
        <template #header> Signup </template>

        <div class="w-96">
          <UForm
            id="form"
            :state="signupState"
            class="z-0"
            @submit="submitHandler"
          >
            <div class="flex justify-between items-center">
              <UFormGroup label="First Name" class="">
                <UInput
                  v-model="signupState.firstName"
                  type="text"
                  required
                  class=""
                />
              </UFormGroup>

              <UFormGroup label="Last Name">
                <UInput
                  v-model="signupState.lastName"
                  type="text"
                  required
                  class=""
                />
              </UFormGroup>
            </div>

            <UFormGroup label="Email" class="my-4">
              <UInput
                v-model="signupState.email"
                type="email"
                requiredå
                class=""
              />
            </UFormGroup>

            <UFormGroup label="Password" class="my-4">
              <UInput
                v-model="signupState.password"
                type="password"
                required
                class=""
              />
            </UFormGroup>

            <div class="w-full my-4">
              <UButton type="submit" :block="true" class="w-full">
                Signup
              </UButton>
            </div>
          </UForm>

          <UDivider label="Already a member?" color="gray" class="my-8" />

          <UButton :block="true" class="">
            <NuxtLink to="/auth/signin" class="w-full text-center"
              >Signin</NuxtLink
            >
          </UButton>
        </div>
      </UCard>
    </div>

    <div
      class="h-full lg:block hidden w-full bg-no-repeat bg-center"
      :style="{ 'background-image': `url('/hero-04.png')` }"
    ></div>
  </div>
</template>

<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useTitle } from "@vueuse/core";
import boardData from "~/data/board.json";
import { useBoardStore } from "~/stores/boardStore";

onMounted(() => {
  const title = useTitle("TaskHub | Signup");
});

const boardStore = useBoardStore();

const router = useRouter();
const auth = getAuth();

const signupState = ref({
  email: "",
  password: "",
  firstName: "",
  lastName: "",
});

const submitHandler = async (event) => {
  const { email, password } = event.data;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      boardStore.board = boardData;
      router.replace("/tasks");
    })
    .catch((error) => {
      console.log("sign-up error:", error.message);
    });
};
</script>
