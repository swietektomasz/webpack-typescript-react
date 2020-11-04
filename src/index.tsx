import React from "react";
import { render } from "react-dom";

function App() {
  return <div>App</div>;
}

render(<App />, document.getElementById("app"));

// Needed for TypeScript file hot reloading
if (module.hot) {
  module.hot.accept();
}
