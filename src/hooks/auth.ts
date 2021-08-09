import { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";

import { firebaseApp } from "../firebase";

export const useAuth = () => {
  const [user, loading, error] = useAuthState(firebaseApp.auth());

  return { user, loading, error };
};

export const useLogin = () => {
  const loginWithGoogle = useCallback(async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  }, []);

  return {
    loginWithGoogle,
  };
};
