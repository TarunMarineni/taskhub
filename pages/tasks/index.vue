<script setup>
import { useBoardStore } from "../stores/boardStore";

const boardStore = useBoardStore();

const newColumnName = ref("");

function addColumn() {
  boardStore.addColumn(newColumnName.value);
  newColumnName.value = "";
}

definePageMeta({
  layout: "header",
  middleware: "auth",
});
</script>

<template>
  <div class="board-wrapper p-4 h-screen overflow-auto">
    <main class="board flex flex-row items-start">
      <BoardColumn
        v-for="(column, columnIndex) in boardStore.board.columns"
        :key="column.id"
        :column="column"
        :columnIndex="columnIndex"
        class="flex-nowrap"
      />

      <div class="pr-4">
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
</template>
