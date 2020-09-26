import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";

import { useRoutes } from "hookrouter";
import Routes from "./services/routes";

function App() {
  const routeResult = useRoutes(Routes);
  return routeResult;
}

export default App;
