import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import MainLanding from "../components/mainLanding/mainLanding";
import MainMenu from "../components/mainMenu/mainMenu";
import MobileMenu from "../components/mobileMenu/mobileMenu";
import StickyFooter from "../components/stickyFooter/stickyFooter";
import StickyIcons from "../components/stickyIcons/stickyIcons";
import { http } from "../service/callApi/api";

export default function Home() {
  useEffect(() => {
    async function getData() {
      const response = await http.get("/api/v1/products");
      console.log(response.data);

    }
    http
  }, []);

  return (
    <>
      <div className="home">
        <div className="page-wrapper">
          <h1 className="d-none">
            Sarar - UAE branch in United Arabic Emirates
          </h1>
          {/* <MobileMenu/> */}
          {/* <MainMenu/> */}
          <Header />
          <MainLanding />
          <Footer />
        </div>
        <StickyFooter />
        <a
          id="scroll-top"
          href="#top"
          title="Top"
          role="button"
          className="scroll-top"
        >
          <i className="d-icon-arrow-up" />
        </a>
        <MobileMenu />
        <StickyIcons />
      </div>
    </>
  );
}
