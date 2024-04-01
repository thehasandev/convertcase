import { useState } from "react";
import Navbar from "./components/Navbar";
import copy from "copy-to-clipboard";
import { MyContext } from "./appContext";
function App() {
  const [open,setOpen] = useState(false)
  const [result, setResult] = useState("");

  const downloadText = () => {
    if (result) {
      const element = document.createElement("a");
      const file = new Blob([result], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "downloaded_text.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  const handleSentencecase = () => {
    if (result) {
      const sentenceCasedText = result
        .toLowerCase()
        .split(". ")
        .map((sentence) => {
          return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        })
        .join(". ");

      setResult(sentenceCasedText);
    }
  };

  const handleTitleCase = () => {
    if (result) {
      const titleCasedText = result
        .toLowerCase()
        .split(" ")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");

      setResult(titleCasedText);
    }
  };

  return (
   <MyContext.Provider value={{ open, setOpen }}>
    <section style={{height:"100vh"}} data-theme={open ? "dark" : "light"}>
      <Navbar />
      <div className="max-w-[1400px] mx-auto mt-5">
        <h1  className={`font-oswald ${open ? "text-white" : "text-black/90"} font-medium text-4xl mb-4 capitalize`}>
          enter the text
        </h1>
        <textarea
          className="border border-black/60 focus:0 w-full h-96 p-5 mb-5"
          onChange={(e) => setResult(e.target.value)}
          value={result}
        ></textarea>

        <button
          onClick={() => {
            setResult(result.toUpperCase());
          }}
          className="font-pop text-base bg-blue-900 rounded-sm duration-500 mr-5 hover:bg-blue-950 text-white font-normal px-4 py-2"
        >
          Convert to Uppercase
        </button>

        <button
          onClick={() => {
            setResult(result.toLowerCase());
          }}
          className="font-pop text-base bg-blue-900 rounded-sm mr-5 duration-500 hover:bg-blue-950 text-white font-normal px-4 py-2"
        >
          Convert to Lowercase
        </button>

        <button
          onClick={handleSentencecase}
          className="font-pop text-base bg-blue-900 rounded-sm mr-5 duration-500 hover:bg-blue-950 text-white font-normal px-4 py-2"
        >
          Sentence Case
        </button>

        <button
          onClick={handleTitleCase}
          className="font-pop text-base bg-blue-900 rounded-sm mr-5 duration-500 hover:bg-blue-950 text-white font-normal px-4 py-2"
        >
          Title Case
        </button>

        <button
          onClick={() => {
            copy(result && result);
          }}
          className="font-pop text-base bg-blue-900 rounded-sm mr-5 duration-500 hover:bg-blue-950 text-white font-normal px-4 py-2"
        >
          Copy to Clipboard
        </button>

      

        <button
          onClick={handleTitleCase}
          className="font-pop text-base bg-blue-900 rounded-sm mr-5 duration-500 hover:bg-blue-950 text-white font-normal px-4 py-2"
        >
          Capitalize Case
        </button>
        <button
          onClick={downloadText}
          className="font-pop text-base bg-blue-900 rounded-sm mr-5 duration-500 hover:bg-blue-950 text-white font-normal px-4 py-2"
        >
          Download Text
        </button>

        <button
          onClick={() => setResult("")}
          className="font-pop text-base bg-blue-900 rounded-sm mr-5 duration-500 hover:bg-blue-950 text-white font-normal px-4 py-2"
        >
          Clear
        </button>
      </div>
    </section>
   </MyContext.Provider>
  );
}

export default App;
