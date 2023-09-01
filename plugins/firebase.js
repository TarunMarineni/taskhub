import { initializeApp } from "firebase/app";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyCL8iqbvkM1xDYxnVc3GiGVMs7zGGJtHs8",
    authDomain: "taskhub-9200f.firebaseapp.com",
    projectId: "taskhub-9200f",
    storageBucket: "taskhub-9200f.appspot.com",
    messagingSenderId: "133981298400",
    appId: "1:133981298400:web:75e3a2d55b86c75e097a85",
    measurementId: "G-6ELT6G10PM"
  };

  initializeApp(firebaseConfig);
})