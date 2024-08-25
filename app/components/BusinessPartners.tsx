import Image from "next/image";
import { useTranslation } from "next-i18next";
import WhatsappNumber from "./WhatsappNumber";

function BusinessPartners() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-white w-full mb-10">
      <h2 className="text-black text-center mt-32 mb-20 text-4xl font-bold">
        <div className="bg-white rounded-full w-20 h-20 mx-auto -mb-12"></div>
        {t("our-business-partners")}
      </h2>
      <div className="max-w-screen-xl mx-auto  grid grid-cols-4 gap-10">
        <Image
          src="/assets/images/chevroletpng.png"
          alt=""
          fill
          className="!relative  object-contain"
        />
        <Image
          src="/assets/images/lamborghini.png"
          alt=""
          fill
          className="!relative  object-contain !w-[200px] m-auto"
        />
        <Image
          src="/assets/images/toyota.jpg"
          alt=""
          fill
          className="!relative  object-contain"
        />
        <Image
          src="/assets/images/ford.svg"
          alt=""
          fill
          className="!relative  object-contain"
        />
        <Image
          src="/assets/images/tesla.png"
          alt=""
          fill
          className="!relative  object-contain"
        />
        <Image
          src="/assets/images/benz.png"
          alt=""
          fill
          className="!relative  object-contain"
        />
        <Image
          src="/assets/images/bmw.png"
          alt=""
          fill
          className="!relative  object-contain"
        />
        <Image
          src="/assets/images/hyundai.gif"
          alt=""
          fill
          className="!relative  object-contain"
        />
      </div>
      <Image
        src="/assets/images/contact-us-bg.png"
        className="!relative  object-contain w-full object-cover object-right !h-[160px] md:!h-auto"
        alt=""
        fill
      />
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 space-y-2 md:space-y-0 px-4 md:px-0 md:space-x-20 md:pb-40 -mt-40">
        <div className="flex z-40">
          <Image
            src="/assets/images/support.png"
            alt=""
            fill
            className="!relative  object-contain !w-20 !h-20"
          />
          <div className="text-white font-bold pt-4">
            CAĞRI MERKEZİ <br />
            <WhatsappNumber
              numberOnly
              number="+90 555 198 68 90"
              className=""
            />
          </div>
        </div>
        <div className="flex space-x-4 pl-3 md:pl-auto z-40">
          <Image src="/assets/svg/call.svg" width={60} height={60} alt="" />
          <div className="text-white font-bold pt-4 whitespace-nowrap">
            HEMEN TIKLAYIN <br />
            <WhatsappNumber
              numberOnly
              number="+90 555 198 68 90"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BusinessPartners;
