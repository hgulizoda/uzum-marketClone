import { Context } from "../context";
import { useContext } from "react";

const useAppContext = () => {
  const context = useContext(Context);
  if (!context) throw new Error("Context is not found");

  return context;
};

export default useAppContext;
