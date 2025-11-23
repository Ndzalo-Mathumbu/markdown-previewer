import "./PreviewerComp.scss";
import "./EditorComp.jsx";
import { marked } from "marked";
export const PREVIEWER = function ({ outCome }) {
  console.log("NK..");

  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  return (
    <div className="_previewer-area">
      {/* <textarea
        name="_previewer"
        id="_previewer"
        placeholder=" PREVIEWER:"
        value={outCome}
        readOnly
      /> */}
      <div
        id="preview"
        className="_preview-output"
        dangerouslySetInnerHTML={{
          __html: outCome ? marked(outCome) : "",
        }}
      ></div>
    </div>
  );
};
