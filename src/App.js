import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";

const App = () => {
  

  return(
    <>
    <Navbar/>
    <Home/>
    <Product/>
    <About/>
    <Contact/>
    </>
  )
};

export default App;
