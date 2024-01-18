import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="main-container">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
