import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { SignInPageStudent } from "./Pages/SignInPageStudent";
import { SignInPageLecturer } from "./Pages/SignInPageLecturer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPageStudent/>}/>
          <Route path="/signInLec" element={<SignInPageLecturer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
