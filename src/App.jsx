import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostRequest from "./pages/PostRequest";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cover bg-center ">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/post-request" element={<PostRequest />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
