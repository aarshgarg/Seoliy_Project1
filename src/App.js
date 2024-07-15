import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";

const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HomeLayout />,
  //     children: [
  //           { path: "", element: <Home /> },
  //           { path: "product", element: <Product /> },
  //           { path: "about", element: <About /> },
  //           { path: "contact", element: <Contact /> }
  //     ]
  //   },
  // ]);
  // return <RouterProvider router={router} />;
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
