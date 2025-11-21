import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { EDITOR } from "./EditorComp.jsx";
import { PREVIEWER } from "./PreviewerComp.jsx";
import "./main.scss";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="__texarea-s">
      <EDITOR />
      <PREVIEWER />
    </div>
  </StrictMode>
);
