import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { EDITOR } from "./EditorComp.jsx";
import { PREVIEWER } from "./PreviewerComp.jsx";
import "./main.scss";

export const App = function () {
  // App holds the markdown state
  const [outCome, setOutCome] = useState("");

  return (
    <div className="__texarea-s">
      {/* Pass setOutCome to Editor so it can update state */}
      <EDITOR outCome={outCome} setOutCome={setOutCome} />

      {/* Pass outCome to Previewer so it can display state */}
      <PREVIEWER outCome={outCome} />
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
