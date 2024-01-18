import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      signOut(auth).then(() => {
        return navigateTo("/auth/signin");
      });
    }

    if (to.path == "/auth/sign") {
      signOut(auth).then(() => {
        return navigateTo("/auth/signin");
      });
    }
  });
});
