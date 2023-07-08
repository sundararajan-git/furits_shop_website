import { useContext } from "react";

import { AuthContext } from "../context/AuthContext.js";

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext is undefind");
  }
  return authContext;
};
