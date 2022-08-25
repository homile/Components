import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Container } from "./components/areas";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Week1 from "./pages/Week1";
import Week2 from "./pages/Week2";
import Week3 from "./pages/Week3";
import Week4 from "./pages/Week4";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/Week1" element={<Week1 />}></Route>
            <Route path="/Week2" element={<Week2 />}></Route>
            <Route path="/Week3" element={<Week3 />}></Route>
            <Route path="/Week4" element={<Week4 />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
