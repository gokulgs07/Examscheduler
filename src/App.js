import React from 'react';
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ExamScheduler from "./components/ExamScheduler/ExamScheduler";
import AllocatePage from "./components/AllocatePage/AllocatePage";
import Pop from './components/Popup';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact></Route>
          <Route path="/home" element={<HomePage />} exact></Route>
          <Route path="/exam-scheduler" element={<ExamScheduler />}></Route>
          <Route path="/AllocatePage" element={<AllocatePage/>}></Route>
          <Route path = "/popup" element={<Pop/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
