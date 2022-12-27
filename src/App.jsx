import InputAreas from "./components/InputAreas";
import Menu from "./components/Menu";
import { useState, useEffect } from "react";
import MarkdownText from "./context/markdown";

function App() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    document.title = "Readme Gen";
  }, []);

  return (
    <MarkdownText.Provider value={{ markdown, setMarkdown }}>
      <div className="dark">
        <main className="flex flex-row dark:bg-slate-800">
          <div className="w-[450px] h-screen shadow-lg border">
            <Menu />
          </div>
          <div className="w-full">
            <div className="text-center text-3xl py-6 text-gray-500 dark:text-white">
              <h2>Readme generator</h2>
            </div>
            <InputAreas />
          </div>
        </main>
      </div>
    </MarkdownText.Provider>
  );
}

export default App;
