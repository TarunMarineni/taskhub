import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useBoardStore } from "~/stores/boardStore";

export const init = async () => {
  const boardStore = useBoardStore();
  const auth = getAuth();

  try {
    const userBoardRef = doc(getFirestore(), "users", auth.currentUser.uid);
    const userBoardSnapshot = await getDoc(userBoardRef);

    if (userBoardSnapshot.exists()) {
      boardStore.board = userBoardSnapshot.data().board;
      console.log("Board Data:", boardStore.board);
    } else {
      console.error("User document does not exist");
    }
  } catch (error) {
    console.error("Error initializing data:", error);
  }
};
