import React from "react";
import { hydrate, render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Lukeworks from "./components/Lukeworks";
import "./index.css";

// EXPL: jsdom doesn't provide a definition for this when using react-snapshot
// and will error
global.requestAnimationFrame = (cb: Function) => cb();

const App = () => (
  <React.StrictMode>
    <Lukeworks />
  </React.StrictMode>
);

const root = document.getElementById("root");
if (root!.hasChildNodes()) {
  hydrate(<App />, root);
} else {
  render(<App />, root);
}

// TODO: Enable serviceWorker?
// https://cra.link/PWA
serviceWorker.unregister();
