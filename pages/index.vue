<template>
  <div class="relative h-full w-full">
    <add-todo class="absolute right-0 "/>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'main',
  
  middleware: ['check-auth'],
})
</script>
