import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Theme } from "@radix-ui/themes";
import { App } from "./app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme
      accentColor="lime"
      grayColor="mauve"
      panelBackground="solid"
      radius="large"
      appearance="dark"
    >
      <App />
    </Theme>
  </StrictMode>
);
