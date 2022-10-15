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
    <div>
      <MarkdownText.Provider value={{ markdown, setMarkdown }}>
        <main className="flex flex-row ">
          <div className="w-[450px] h-screen shadow-lg border">
            <Menu />
          </div>
          <div className="w-full">
            <div className="text-center text-3xl py-6 text-gray-500">
              <h2>Readme generator</h2>
            </div>
            <InputAreas />
          </div>
        </main>
      </MarkdownText.Provider>
    </div>
  );
}

export default App;
