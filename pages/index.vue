<template>
  <div>main</div>
</template>

<script setup>
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const currentUserId = getAuth().currentUser.uid;

// Fetch all documents from the 'tasks' collection for the specific user
const querySnapshot = await getDocs(
  collection(doc(getFirestore(), "users", currentUserId), "tasks")
);

querySnapshot.forEach((doc) => {
  console.log("Task ID:", doc.id);
  console.log("Task Data:", doc.data());
});

definePageMeta({
  middleware: "auth",
});
</script>
