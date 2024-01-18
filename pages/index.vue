<template>
  <LoaderBody />
</template>

<script setup>
import { init } from "~/lib/init";
import { useTitle } from "@vueuse/core";

const loader = ref(false);

onMounted(async () => {
  const title = useTitle("TaskHub");
  loader.value = true;
  await init();
  loader.value = false;
  useRouter().push("/tasks");
});

definePageMeta({
  middleware: "auth",
});
</script>
