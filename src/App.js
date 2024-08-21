import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/hero";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";
import About from "./Components/About/About";
import Collection from "./Components/Collection/Collection";
import Footer from "./Components/Footer/Footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Shop from './Pages/Shop.jsx';

function App() {
  return (
    <>
      
      <Navbar />
      <Hero />
      <ProductDisplay />
      <About />
      <Collection />
      <Footer />
    </>

    // <BrowserRouter>
    // <Navbar/>
    // <Routes>
    //   <Route path="/" element={<Shop/>}/>
    //   <Route path='/product' element={<Shop/>}/>
    //   <Route path="/About" element={<Shop/>}/>
    // </Routes>
    // </BrowserRouter>
  );
}

export default App;
