// import { v4 as uuid } from 'uuid'
import { defineStore } from "pinia";
// import { useStorage } from "@vueuse/core";
import defaultCards from "~/data/defaultData/defaultCards.js";

export const useBoardStore = defineStore("boardStore", () => {
  // const board = useStorage("board", defaultCards);
  const cards = ref(defaultCards);
  /**
   * Tasks
   */
  // const getTask = computed(() => {
  //   return (taskId) => {
  //     for (const column of board.value.columns) {
  //       const task = column.tasks.find((task) => task.id === taskId);
  //       if (task) return task;
  //     }
  //   };
  // });

  // function addTask({ columnIndex, taskName }) {
  //   board.value.columns[columnIndex].tasks.push({
  //     id: uuid(),
  //     name: taskName,
  //     description: "",
  //   });
  // }

  // function deleteTask(taskId) {
  //   for (const column of board.value.columns) {
  //     const taskIndex = column.tasks.findIndex((task) => task.id === taskId);

  //     if (taskIndex !== -1) {
  //       column.tasks.splice(taskIndex, 1);
  //       return;
  //     }
  //   }
  // }

  /**
   * Columns
   */
  const addColumn = (data) => {
    const { name: columnName, id: columnId } = data;
    cards.value.push({
      id: columnId,
      name: columnName,
      tasks: [],
    });
  };

  // function deleteColumn(columnIndex) {
  //   board.value.columns.splice(columnIndex, 1);
  // }

  return {
    /* State */
    cards,
    /* Getters */
    // getTask,
    /* Actions*/
    addColumn,
    // addTask,
    // deleteColumn,
    // deleteTask,
  };
});
