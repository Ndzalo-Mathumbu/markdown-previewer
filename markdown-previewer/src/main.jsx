import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { EDITOR } from "./EditorComp.jsx";
import { PREVIEWER } from "./PreviewerComp.jsx";
import "./main.scss";
import reactIMG from "./assets/react.svg";
export const App = function () {
  //markdown state
  const defaultMarkdown = `
# Markdown Previewer
## Write HTML on the left watch results on the right. 😀

**Bold Text**

[Visit my Github](https://github.com/Ndzalo-Mathumbu/)

Inline \`code\` and block:

\`\`\`js
console.log("Code block!");
\`\`\`

-  item 1
-  item 2

> Blockquote

![Image](${reactIMG})

| Name  | Age | City     |
|-------|-----|----------|
| John | 25  | Sandton |
| Deo  | 30  | Jozi   |

&copy; Desinged and Coded By | Ndzalo NK Mathumbu
`;

  const [outCome, setOutCome] = useState(defaultMarkdown);

  return (
    <div className="__texarea-s">
      <EDITOR outCome={outCome} setOutCome={setOutCome} />
      <PREVIEWER outCome={outCome} />
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
