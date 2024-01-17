<template>
  <div class="w-screen h-auto relative">
    <header
      class="h-14 px-4 z-50 w-screen flex justify-end items-center bg-white text-black"
    >
      <div class="">
        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
          <UAvatar icon="i-heroicons-photo" size="sm" />
        </UDropdown>
      </div>
    </header>
    <div class="h-full w-full absolute top-12 mt-6">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { signOut, getAuth } from "firebase/auth";
import { useBoardStore } from "~/stores/boardStore";

const boardStore = useBoardStore();

const items = [
  [
    {
      label: "Signout",
      click: () => {
        signOut(getAuth())
          .then(() => {
            boardStore.board = null;
            useRouter().push("/auth/signin");
          })
          .catch((error) => {
            // An error happened.
          });
      },
    },
  ],
];
</script>
