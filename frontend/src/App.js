import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from "./Pages/SignInPage/SignIn"
export default function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}
