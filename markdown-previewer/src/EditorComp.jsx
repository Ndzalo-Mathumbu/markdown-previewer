import "./EditorComp.scss";

export const EDITOR = function ({ outCome, setOutCome }) {
  console.log("NK");

  return (
    <div className="_editor-area">
      <textarea
        name="editor"
        id="_editor"
        placeholder=" EDITOR:"
        value={outCome}
        onChange={(e) => setOutCome(e.target.value)}
      ></textarea>
    </div>
  );
};
