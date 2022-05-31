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

export default function Home({ dataLanding }) {
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
          <MainLanding dataLanding={dataLanding} />
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

export async function getStaticProps() {
  // Call an external API endpoint to get posts

  const responseHeader = await http.get(
    "https://sarar-mansouri.fandogh.cloud/api/landing/main/"
  );
  const responseTwoPicture = await http.get(
    "https://sarar-mansouri.fandogh.cloud/api/landing/main/cart/top/"
  );
  const responseBanner = await http.get(
    "https://sarar-mansouri.fandogh.cloud/api/landing/main/middle-banner/"
  );
  const responseListBestSelling = await http.get(
    "https://sarar-mansouri.fandogh.cloud/api/landing/main/best-selling-product/"
  );
  const responseListNewProduct = await http.get(
    "https://sarar-mansouri.fandogh.cloud/api/landing/new-product/"
  );
  const dataLanding = {
    header: responseHeader?.data,
    twoPicture: responseTwoPicture?.data,
    banner: responseBanner?.data,
    listBestSelling: responseListBestSelling?.data,
    listNewProduct: responseListNewProduct?.data,
  };

  return {
    props: {
      dataLanding,
    },
  };
}
