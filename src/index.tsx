import React from "react";
import ReactDOMClient from "react-dom/client";
import { SchemaEditorScreen } from "./screens/SchemaEditorScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<SchemaEditorScreen />);
