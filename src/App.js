import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppContainer } from "./components/areas";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Week1 from "./pages/Week1";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContainer>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/Week1" element={<Week1 />}></Route>
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
