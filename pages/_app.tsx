import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import "./globals.css";
import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Head from "next/head";
import clsx from "clsx";
import { useRouter } from "next/router";
import localFont from "next/font/local";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const iransans = localFont({
  src: "../public/fonts/iransans/woff2/IRANSansWeb_FaNum.woff2",
});

const MyApp: React.FC<AppProps> = ({
  router,
  Component,
  pageProps,
}: AppProps) => {
  return (
    <div
      className={clsx("", router.locale === "fa" ? iransans.className : "", {
        rtl: router.locale === "fa"
      })}
    >
      <Head>
        <title>Super Pay Tourism</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export async function getServerSideProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"], null, [
        "en",
      ])),
    },
  };
}
export default appWithTranslation(MyApp, nextI18NextConfig);
