import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import MainLanding from "../components/mainLanding/mainLanding";
import MainMenu from "../components/mainMenu/mainMenu";
import MobileMenu from "../components/mobileMenu/mobileMenu";
import StickyFooter from "../components/stickyFooter/stickyFooter";
import StickyIcons from "../components/stickyIcons/stickyIcons";
import { http } from "../service/callApi/api";

export default function Home() {
  const [dataHeader, setDataHeader] = useState();
  useEffect(() => {
    async function getData() {
      const responseHeader = await http.get(
        "https://sarar-mansouri.fandogh.cloud/api/landing/main/"
      );
      if (responseHeader.status == 200) {
        setDataHeader(responseHeader.data);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />
      </Head>
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
        {/* <StickyIcons /> */}
      </div>
    </>
  );
}
