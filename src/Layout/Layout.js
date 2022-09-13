import { Outlet } from "react-router-dom"
import Nav from"./Nav"
import Footer from "./Footer"
import Side from "./Side"

const Layout = () =>{
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <Side />
    </>
  );
}




export default Layout