import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BiLoaderAlt } from "react-icons/bi";
import { FiSun, FiMoon } from "react-icons/fi";
import DarkMode from "../context/darkmode";
import MarkdownText from "../context/markdown";
import useTemplates from "../hooks/getTemplates";

const Menu = () => {
  const { markdown, setMarkdown } = useContext(MarkdownText);
  const { mode, setMode } = useContext(DarkMode);
  const { templates } = useTemplates();

  const resetMarkdown = () => {
    setMarkdown("");
  };

  const changeMode = () => {
    if (mode.length) {
      setMode("");
    } else {
      setMode("dark");
    }
  };

  const addTemplate = (temp) => {
    setMarkdown(markdown + "\n" + temp);
  };

  return (
    <div className="px-4 divide-y h-screen dark:bg-slate-800">
      {/* template options  */}
      <div className="pb-6">
        <div className="pt-10 flex justify-end">
          {mode.length ? (
            <FiSun
              className="text-gray-500 hover:text-gray-600 dark:text-white w-8 h-8 cursor-pointer"
              onClick={changeMode}
            />
          ) : (
            <FiMoon
              className="text-gray-500 hover:text-gray-600 dark:text-white w-8 h-8 cursor-pointer"
              onClick={changeMode}
            />
          )}
        </div>
        <p className="text-sm pt-8 text-gray-500 pb-2 dark:text-white">
          Append ready made templates
        </p>
        <div className="h-[350px] py-4 overflow-auto px-2 border rounded-md dark:border-white dark:bg-slate-900">
          {templates.length ? (
            templates.map((temp) => (
              <div
                key={temp.title}
                onClick={() => addTemplate(temp.fileData)}
                className="w-full border rounded-md text-center py-2 mt-2 cursor-pointer shadow-sm hover:shadow-md text-gray-500 hover:text-gray-600 dark:text-black dark:bg-white dark:hover:bg-gray-100"
              >
                {temp.title}
              </div>
            ))
          ) : (
            <div className="flex justify-center align-middle items-center h-full">
              <BiLoaderAlt className="w-8 h-8 animate-spin text-gray-500 dark:text-white" />
            </div>
          )}
        </div>
      </div>

      {/* options  */}
      <div className=" pt-6 space-y-2 px-2">
        <p className="pb-2 text-sm text-gray-500 dark:text-white">
          Other options
        </p>
        <div
          className="w-full border rounded-md text-center py-2 cursor-pointer shadow-sm hover:shadow-md text-gray-500 hover:text-gray-600 dark:text-black dark:bg-white dark:hover:bg-gray-100"
          onClick={resetMarkdown}
        >
          Reset
        </div>
        <CopyToClipboard text={markdown}>
          <div className="w-full border rounded-md text-center py-2 cursor-pointer shadow-sm hover:shadow-md text-gray-500 hover:text-gray-600 dark:text-black dark:bg-white dark:hover:bg-gray-100">
            Copy
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Menu;
