<template>
  <Suspense>
    <div class="w-full h-screen relative">
      <header
        class="flex fixed top-0 h-14 left-0 right-0 z-50 pr-4 justify-end items-center bg-white text-black"
      >
        <UDropdown :items="profileItems" class="p-0 m-0" mode="click">
          <UAvatar icon="i-heroicons-user-circle" size="md" class="p-0 m-0" />

          <template #account="{ item }">
            <div class="text-left">
              <p>Signed in as</p>
              <p class="truncate font-medium text-gray-900 dark:text-white">
                {{ item.label }}
              </p>
            </div>
          </template>
        </UDropdown>
      </header>

      <div class="board-wrapper absolute top-14 p-4 overflow-x-scroll">
        <main class="board flex flex-row items-start">
          <BoardColumn
            v-for="(column, columnIndex) in boardStore.board?.columns"
            :key="column.id"
            :column="column"
            :columnIndex="columnIndex"
            class="flex-nowrap"
          />

          <div class="">
            <UContainer class="column flex-1 p-8 rounded bg-gray-100 min-w-96">
              <UInput
                v-model="newColumnName"
                type="text"
                placeholder="Create new column"
                icon="i-heroicons-plus-circle-solid"
                @keyup.enter="addColumn"
              />
            </UContainer>
          </div>
        </main>
      </div>
    </div>

    <template #fallback>
      <div class="w-screen h-screen bg-black text-white">Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { useBoardStore } from "~/stores/boardStore";
import { useUserStore } from "~/stores/userStore";
import { signOut, getAuth } from "firebase/auth";
import { useTitle } from "@vueuse/core";

onMounted(() => {
  const title = useTitle("TaskHub | Tasks");
});

const boardStore = useBoardStore();
const userStore = useUserStore();

const newColumnName = ref("");

function addColumn() {
  boardStore.addColumn(newColumnName.value);
  newColumnName.value = "";
}

const profileItems = [
  [
    {
      label: userStore.user?.email,
      slot: "account",
      disabled: true,
    },
  ],
  [
    {
      label: "Signout",
      icon: "i-heroicons-arrow-left-start-on-rectangle",
      click: () => {
        signOut(getAuth())
          .then(() => {
            if (boardStore.board) {
              boardStore.board = null;
            }
            useRouter().push("/auth/signin");
          })
          .catch((error) => {
            console.log("error in tasks/index");
          });
      },
    },
  ],
];

definePageMeta({
  middleware: "auth",
});
</script>
