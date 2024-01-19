import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useUserStore = defineStore("UserStore", () => {
  const user = useStorage("user", {
    uid: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  return {
    user,
  };
});
