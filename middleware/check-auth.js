import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (!user) {
        return navigateTo({ path: '/auth/signin' })
      }
    });

    if (to.path == '/auth/sigin' && from.path == '/todo') {
      signOut(getAuth())
    }

    return () => unsubscribe();
  } catch (error) {
    console.error('check-auth::', error)
  }
})
