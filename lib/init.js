import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";
import { useBoardStore } from "~/stores/boardStore";
import { useUserStore } from "~/stores/userStore";

export const init = async () => {
  const boardStore = useBoardStore();
  const userStore = useUserStore();

  const auth = getAuth();

  try {
    const userBoardRef = doc(getFirestore(), "users", auth.currentUser.uid);
    const userBoardSnapshot = await getDoc(userBoardRef);

    if (userBoardSnapshot.exists()) {
      boardStore.board = userBoardSnapshot.data().board;
      userStore.user = userBoardSnapshot.data().user;
    } else {
      console.error("User document does not exist");
    }
  } catch (error) {
    console.error("Error initializing data:", error);
  }

  return;
};
