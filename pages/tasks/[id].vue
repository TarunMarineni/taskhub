<template>
  <div class="task-wrapper max-w-2xl bg-gray-200 m-32 mx-auto py-4 rounded">
    <div
      v-if="task"
      class="task-view flex flex-col flex-grow items-start justify-between px-4"
    >
      <UModal v-model="isOpen" fullscreen>
        <UCard
          :ui="{
            ring: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          }"
          class="flex justify-center items-center h-screen w-screen"
        >
          <div class="w-96 lg:w-[500px]">
            <div class="flex items-center justify-between">
              <UFormGroup label="Name" class="w-full mb-4">
                <UInput type="text" v-model="task.name" />
              </UFormGroup>
            </div>

            <UFormGroup label="Description" class="w-full mb-4">
              <UTextarea v-model="task.description" />
            </UFormGroup>

            <div class="flex space-x-2 w-full justify-end">
              <UButton color="red" @click="deleteTask"> Delete </UButton>
              <UButton color="green" @click="updateTask"> Close </UButton>
            </div>
          </div>
        </UCard>
      </UModal>
    </div>

    <div class="text-black" v-else>
      <p>Task not found.</p>
    </div>
  </div>
</template>

<script setup>
import { useBoardStore } from "~/stores/boardStore";
import { useTitle } from "@vueuse/core";

const boardStore = useBoardStore();
const route = useRoute();
const router = useRouter();
const toast = useToast();

const isOpen = ref(true);

const task = computed(() => {
  return boardStore.getTask(route.params.id);
});

function deleteTask() {
  toast.add({
    title: "Task deleted",
    description: `${task.value.name} has been deleted.`,
    icon: "i-heroicons-trash",
    color: "red",
  });
  boardStore.deleteTask(route.params.id);
  router.push("/tasks");
}

function updateTask() {
  toast.add({
    title: "Task Updates",
    description: `${task.value.name} has been updated.`,
    icon: "i-heroicons-save",
    color: "green",
  });
  router.push("/tasks");
}

definePageMeta({
  middleware: ["auth"],
});
</script>
