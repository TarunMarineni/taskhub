<template>
  <div class="board-wrapper">
    <UContainer class="my-8 w-full flex justify-center">
      <UForm
        id="add-card"
        :state="formState"
        class="w-96 flex justify-center items-center flex-col"
        @submit="addCardHandler"
      >
        <UFormGroup class="mb-4 w-full" id="add-card-name">
          <UInput v-model="formState.newCard" type="text" required class="" />
        </UFormGroup>

        <UButton type="submit" class="text-center w-24"> Add Card </UButton>
      </UForm>
    </UContainer>

    <main class="board flex flex-nowrap w-full pr-4">
      <UContainer
        v-for="cards in boardStore.cards"
        :key="cards.id"
        class="column bg-white rounded-lg p-4 mx-4 w-96 flex-shrink-0"
      >
        <h2 class="mb-4 text-black font-bold text-xl uppercase">
          {{ cards.name }}
        </h2>
        <ul>
          <li v-for="task in cards.tasks" :key="task.id">
            <UCard class="mb-4">
              <strong>{{ task.name }}</strong>
              <p>{{ task.description }}</p>
            </UCard>
          </li>
        </ul>
      </UContainer>
    </main>
    <div v-show="isModalOpen" class="task-bg" @click.self="closeModal">
      <NuxtPage :key="route.fullPath" />
    </div>
  </div>
</template>

<script setup>
import { useBoardStore } from "@/stores/boardStore";
import { getAuth } from "firebase/auth";
import { doc, addDoc, getFirestore, collection } from "firebase/firestore";

const boardStore = useBoardStore();

const route = useRoute();
const router = useRouter();

const formState = ref({
  newCard: "",
});

const addCardHandler = async (event) => {
  const { newCard } = event.data;

  const addDocRef = await addDoc(
    collection(
      doc(getFirestore(), "users", getAuth().currentUser.uid),
      "tasks"
    ),
    {
      name: newCard,
    }
  );

  boardStore.addColumn({ name: newCard, id: addDocRef.id });
  formState.value.newCard = "";
};

const isModalOpen = computed(() => {
  return route.name === "index-tasks-id";
});

function closeModal() {
  router.push("/");
}

definePageMeta({
  middleware: "auth",
});
</script>
