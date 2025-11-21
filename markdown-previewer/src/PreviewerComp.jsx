import "./PreviewerComp.scss";
import "./EditorComp.jsx";

export const PREVIEWER = function ({ outCome }) {
  console.log("NK..");
  return (
    <div className="_previewer-area">
      <textarea
        name="_previewer"
        id="_previewer"
        placeholder=" PREVIEWER:"
        value={outCome}
        readOnly
      />
    </div>
  );
};
