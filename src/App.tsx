import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import RestarauntList from "./RestarauntList/RestarauntList";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
