import React, { useContext } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import MarkdownText from "../context/markdown";
import remarkGfm from "remark-gfm";

// hello world
const InputAreas = () => {
  const { markdown, setMarkdown } = useContext(MarkdownText);

  return (
    <div className="flex justify-center align-middle items-center space-x-12 mt-16 w-full">
      <div className="">
        <h2 className="text-gray-400 dark:text-white">Editor</h2>
        <textarea
          className="border text-gray-500 focus:outline-none p-2 rounded-md w-[500px] h-[550px]"
          name="markdown"
          id="markdown"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </div>
      <div className="">
        <h2 className="text-gray-400 dark:text-white">Preview</h2>
        <article
          className="prose overflow-auto prose-sm border focus:outline-none p-2 rounded-md w-[500px] h-[550px] dark:bg-white"
          id="markdown"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default InputAreas;
