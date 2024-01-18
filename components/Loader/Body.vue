<template>
  <div class="w-screen h-screen bg-white">
    <USkeleton
      class="h-14 w-screen flex justify-end items-center"
      :ui="{ background: 'bg-gray-200 dark:bg-gray-200' }"
    >
    </USkeleton>
    <div class="space-x-4 p-4 flex mt-4">
      <USkeleton
        class="h-[450px] w-96"
        :ui="{ background: 'bg-gray-200 dark:bg-gray-200' }"
      />
      <USkeleton
        class="h-[350px] w-96"
        :ui="{ background: 'bg-gray-200 dark:bg-gray-200' }"
      />
      <USkeleton
        class="h-[450px] w-96"
        :ui="{ background: 'bg-gray-200 dark:bg-gray-200' }"
      />
      <USkeleton
        class="h-[100px] w-96"
        :ui="{ background: 'bg-gray-200 dark:bg-gray-200' }"
      />
    </div>
  </div>
</template>
