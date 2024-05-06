import { useState } from "react";

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(false);

  function signIn() {
    setIsAuth(true);
  }

  function signOut() {
    setIsAuth(false);
  }

  return { isAuth, signIn, signOut };
}
