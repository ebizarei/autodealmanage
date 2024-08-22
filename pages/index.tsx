
import Image from "next/image";
import Services from "./../app/components/Services";
import SpecialTours from "./../app/components/SpecialTours";
import Statistic from "./../app/components/Statistic";
import BusinessPartners from "./../app/components/BusinessPartners";
import Footer from "./../app/components/Footer";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import nextI18NextConfig from '../next-i18next.config.js'
import { GetStaticPropsContext } from "next";

 function Home() {
  const  {t} = useTranslation('common')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Image
        src="/assets/images/header.jpg"
        fill
        alt=""
        className="min-h-[893px] z-10 object-cover object-center"
      />
      <div className="relative z-20 text-white text-center mt-[150px] min-h-[704px]">
        {/* <div className="absolute left-[-100px] space-y-4 top-10">
          <Image
            src="/assets/svg/instagram.svg"
            width={23}
            height={23}
            alt="instagram"
          />
          <Image
            src="/assets/svg/facebook.svg"
            width={23}
            height={23}
            alt="facebook"
          />
          <Image src="/assets/svg/x.svg" width={23} height={23} alt="x" />
          <Image
            src="/assets/svg/youtube.svg"
            width={23}
            height={23}
            alt="youtube"
          />
          <Image
            src="/assets/svg/linkedin.svg"
            width={23}
            height={23}
            alt="linkedin"
          />
        </div> */} 
        <div className="font-semibold text-6xl md:text-[85px] uppercase md:pt-52">
        Dealer Management <br /> System (DMS)
        </div>
        {/* <div className="tracking-[0.85em]">Dealer Management System (DMS)</div>
        <div className="font-semibold text-6xl md:text-[178px] leading-[228px]">
          ISTANBUL
        </div>
        <a 
        href='https://wa.me/+902123003366?text='
        className="flex text-white gap-2 border border-white rounded-3xl py-3 px-8 w-fit m-auto">
          <Image src="/assets/svg/call.svg" width={24} height={24} alt="call" />
          {t('reserve-now')}
        </a> */}
      </div>
      <Services />
      {/* <SpecialTours /> */}

      <div className="max-w-full w-full mt-10">
        <Image src="/assets/images/statistic.jpg" className="!relative w-full" alt="" fill/>
      </div>

      <Statistic />

      <BusinessPartners />
    </main>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ["common"], null, ["en"])),
    },
  };
}

// export async function getServerSideProps({ locale }: GetStaticPropsContext) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale ?? "en", ["common"], null, [
//         "en",
//       ])),
//     },
//   };
// }
export default Home