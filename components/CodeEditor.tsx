import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Editor = dynamic(import("./Editor"), { ssr: false });
import { TbHtml, TbBrandCss3, TbBrandJavascript } from "react-icons/tb";

const CodeEditor: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const updateOutput = () => {
      setOutput(`
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body>${htmlCode}</body>
          <script>${jsCode}</script>
        </html>
      `);
    };

    updateOutput();
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div>
      <div className="editors">
        <Editor
          lang={htmlCode}
          setLang={setHtmlCode}
          head="HTML"
          icon={<TbHtml className="icon" />}
        />
        <Editor
          lang={cssCode}
          setLang={setCssCode}
          head="CSS"
          icon={<TbBrandCss3 className="icon" />}
        />
        <Editor
          lang={jsCode}
          setLang={setJsCode}
          head="JS"
          icon={<TbBrandJavascript className="icon" />}
        />
      </div>
      <div className="output">
        <h2>Preview</h2>
        <iframe id="output-iframe" srcDoc={output} />
      </div>
    </div>
  );
};

export default CodeEditor;
