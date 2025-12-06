import "./PreviewerComp.scss";
import "./EditorComp.jsx";
import { useRef } from "react";
import { marked } from "marked";
import html2pdf from "html2pdf.js";
export const PREVIEWER = function ({ outCome }) {
  // const modalWidow = document.querySelector(".modal_widow");
  const modalRef = useRef(null);
  const modalRef2 = useRef(null);

  console.log("NK..");

  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  const showPopUp = function () {
    modalRef.current.style.display = "block";
    modalRef2.current.style.display = "block";
  };

  const hidePopUp = function () {
    modalRef.current.style.display = "none";
    modalRef2.current.style.display = "none";
  };

  const downloadMarkdown = function () {
    const markDownContent = outCome;
    const blob = new Blob([markDownContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Markdown.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPDF = function () {
    const convertElement = document.querySelector("#preview");
    convertElement.style.height = "auto";
    // convertElement.style.overflow = "visible";
    html2pdf()
      .set({
        margin: 10,
        filename: "Markdown-Preview.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2, useCORS: true, logging: true },
        jsPDF: {
          unit: "mm",
          format: "a4",
          oriantation: "portrait",
        },
      })
      .from(convertElement)
      .save();
    convertElement.style.height = "590px";
  };

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

      <center>
        <button onClick={showPopUp} className="Btn">
          <svg
            class="svgIcon"
            viewBox="0 0 384 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
          </svg>
          <span class="icon2"></span>
        </button>
      </center>
      <div ref={modalRef} className="modal_widow">
        <span className="download_title">Download Format</span>
        <span
          className="download_subtitle--1 low_headings"
          onClick={downloadMarkdown}
        >
          Markdown File: Download as .md
        </span>
        <br />
        <span
          className="download_subtitle--2 low_headings"
          onClick={downloadPDF}
        >
          PDF File: Download as PDF
        </span>
        <hr />
      </div>
      <div ref={modalRef2} className="modal_overlay" onClick={hidePopUp}></div>
    </div>
  );
};
