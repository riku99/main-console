import { useAuthState } from "react-firebase-hooks/auth";

import { firebaseApp } from "../firebase";

export const useAuth = () => {
  const [user, loading, error] = useAuthState(firebaseApp.auth());
  console.log(error);
  return { user, loading, error };
};
