import { v4 as uuid } from "uuid";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import boardData from "~/data/board.json";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const useBoardStore = defineStore("boardStore", () => {
  const board = useStorage("board", boardData);

  const auth = getAuth();

  /**
   * Tasks
   */
  const getTask = computed(() => {
    return (taskId) => {
      for (const column of board.value.columns) {
        const task = column.tasks.find((task) => task.id === taskId);
        if (task) return task;
      }
    };
  });

  function addTask({ columnIndex, taskName }) {
    board.value.columns[columnIndex].tasks.push({
      id: uuid(),
      name: taskName,
      description: "",
    });

    updateBoardInFirestore();
  }

  function deleteTask(taskId) {
    for (const column of board.value.columns) {
      const taskIndex = column.tasks.findIndex((task) => task.id === taskId);

      if (taskIndex !== -1) {
        column.tasks.splice(taskIndex, 1);
        return;
      }
    }

    updateBoardInFirestore();
  }

  function moveTask({
    fromTaskIndex,
    toTaskIndex,
    fromColumnIndex,
    toColumnIndex,
  }) {
    const task = board.value.columns[fromColumnIndex].tasks.splice(
      fromTaskIndex,
      1
    )[0];

    board.value.columns[toColumnIndex].tasks.splice(toTaskIndex, 0, task);

    updateBoardInFirestore();
  }

  /**
   * Columns
   */
  const addColumn = async (columnName) => {
    board.value.columns.push({
      name: columnName,
      tasks: [],
    });
    updateBoardInFirestore();
  };

  function deleteColumn(columnIndex) {
    board.value.columns.splice(columnIndex, 1);

    updateBoardInFirestore();
  }

  function moveColumn({ fromColumnIndex, toColumnIndex }) {
    const column = board.value.columns.splice(fromColumnIndex, 1)[0];
    board.value.columns.splice(toColumnIndex, 0, column);

    updateBoardInFirestore();
  }

  /**
   * Firestore
   */
  const updateBoardInFirestore = async () => {
    const userBoardRf = await setDoc(
      doc(getFirestore(), "users", auth.currentUser.uid),
      {
        board: board.value,
      }
    );
  };

  return {
    /* State */
    board,
    /* Getters */
    getTask,
    /* Actions*/
    addColumn,
    addTask,
    deleteColumn,
    deleteTask,
    moveColumn,
    moveTask,
    updateBoardInFirestore,
  };
});
