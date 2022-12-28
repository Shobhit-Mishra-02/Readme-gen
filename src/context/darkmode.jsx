import { createContext } from "react";

const DarkMode = createContext({
  mode: "",
  setMode: () => {},
});

export default DarkMode;
