import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ loggedIn, userData }) {
  return (
    <>
      <Header loggedIn={loggedIn} userData={userData} />
      <Outlet />
      <Footer />
    </>
  );
}
