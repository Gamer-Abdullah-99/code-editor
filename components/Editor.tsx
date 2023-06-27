import React from "react";
import { SetStateAction } from "react";
import { Dispatch } from "react";
import AceEditor from "react-ace";
import { ReactElement } from "react";

interface Editor {
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
  head: string;
  icon: ReactElement<any, any>;
}

const Editor: React.FC<Editor> = ({ lang, setLang, head, icon }) => {
  return (
    <div className="editor">
      <h2>
        {icon}
        {head}
      </h2>
      <AceEditor
        mode={lang}
        theme="github"
        width="100%"
        height="90%"
        value={lang}
        onChange={setLang}
        enableLiveAutocompletion={true}
        className="editor-comp"
      />
    </div>
  );
};

export default Editor;
