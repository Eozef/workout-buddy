import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("AuthContext must be used inside an AuthContextProvider");
  }

  return context;
};
