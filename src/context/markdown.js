import { createContext } from "react";

const MarkdownText = createContext({
  markdown: "",
  setMarkdown: () => {},
});

export default MarkdownText;
