<template>
  <div
    class="w-screen h-screen"
    :style="{ 'background-image': `url('/404.gif')` }"
  ></div>
</template>

<script setup>
import { useTitle } from "@vueuse/core";

onMounted(() => {
  const title = useTitle("TaskHub | Error");
});
</script>
