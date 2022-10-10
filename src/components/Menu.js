import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import MarkdownText from "../context/markdown";
import useTemplates from "../hooks/getTemplates";

const Menu = () => {
  const { markdown, setMarkdown } = useContext(MarkdownText);
  const { templates } = useTemplates();

  const resetMarkdown = () => {
    setMarkdown("");
  };

  const addTemplate = (temp) => {
    setMarkdown(markdown + "\n" + temp);
  };

  return (
    <div className="px-4 divide-y ">
      {/* template options  */}
      <div className="pb-6">
        <p className="text-sm pt-14 text-gray-500 pb-2">
          Append ready made templates
        </p>
        {templates.length &&
          templates.map((temp) => (
            <div
              key={temp.title}
              onClick={() => addTemplate(temp.fileData)}
              className="w-full border rounded-md text-center py-2 mt-2 cursor-pointer shadow-sm hover:shadow-md text-gray-500 hover:text-gray-600"
            >
              {temp.title}
            </div>
          ))}
      </div>

      {/* options  */}
      <div className=" pt-6 space-y-2">
        <p className="pb-2 text-sm text-gray-500">Other options</p>
        <div
          className="w-full border rounded-md text-center py-2 cursor-pointer shadow-sm hover:shadow-md text-gray-500 hover:text-gray-600"
          onClick={resetMarkdown}
        >
          Reset
        </div>
        <CopyToClipboard text={markdown}>
          <div className="w-full border rounded-md text-center py-2 cursor-pointer shadow-sm hover:shadow-md text-gray-500 hover:text-gray-600">
            Copy
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Menu;
