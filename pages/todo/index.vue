<template>
  <div class="h-screen w-full">Home</div>
</template>

<script setup>
definePageMeta({
  layout: 'main',
  
  middleware: ['check-auth'],
})
</script>
