<script setup>
import { useBoardStore } from "~/stores/boardStore";
import { init } from "~/lib/init";

const loader = ref(false);

onMounted(() => {
  loader.value = true;
});

await init();

const boardStore = useBoardStore();
console.log("Board Data:", boardStore.board);

loader.value = false;

useRouter().push("/tasks");

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center bg-white">
    <LoaderSpinner v-if="loader" />
  </div>
</template>
