import { useState } from "react";
import "./App.css";
import Main from "./components/homepage/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/aboutpage/About";
import Navbar from "./components/Navbar";
import Hire from "./components/hirePage/Hire";
import Project from "./components/porjectPage/Project";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/about" element={<About/>} />
          <Route path="/navbar" element={<Navbar/>} />
          <Route path="/hire" element={<Hire/>} />
          <Route path="/projects" element={<Project/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
