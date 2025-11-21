import "./PreviewerComp.scss";

export const PREVIEWER = function () {
  console.log("NK..");
  return (
    <div className="_previewer-area">
      <textarea
        name="_previewer"
        id="_previewer"
        placeholder=" PREVIEWER:"
      ></textarea>
    </div>
  );
};
