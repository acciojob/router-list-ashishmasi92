
import React from "react";
import ListDetails from "./page/LIstDetails";
import ListItem from "./page/LIstItem";
import { Routes, Route } from "react-router-dom"
import './../styles/App.css';
import Navbar from "./Navbar";



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListItem/>} />
        <Route path="/item/:id" element={<ListDetails/>} />
      </Routes>
    </div>
  )
}

export default App
