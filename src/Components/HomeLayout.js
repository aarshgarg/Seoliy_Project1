import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="layout">
      {/* <Outlet /> */}
      </div>
    </>
  );
};
export default HomeLayout;