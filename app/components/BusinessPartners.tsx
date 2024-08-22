import Image from "next/image";
import { useTranslation } from "next-i18next";
import WhatsappNumber from "./WhatsappNumber";

function BusinessPartners() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-white w-full">
      <h2 className="text-black text-center mt-32 mb-20 text-4xl font-bold">
        <div className="bg-black rounded-full w-20 h-20 mx-auto -mb-12"></div>
        {t("our-business-partners")}
      </h2>
      <div className="max-w-fit mx-auto  grid grid-cols-4">
        <Image
          src="/assets/images/business-partner-1.png"
          alt=""
          fill
          className="!relative"
        />
        <Image
          src="/assets/images/business-partner-2.png"
          alt=""
          fill
          className="!relative"
        />
        <Image
          src="/assets/images/business-partner-3.png"
          alt=""
          fill
          className="!relative"
        />
        <Image
          src="/assets/images/business-partner-4.png"
          alt=""
          fill
          className="!relative"
        />
        <Image
          src="/assets/images/business-partner-5.png"
          alt=""
          fill
          className="!relative"
        />
        <Image
          src="/assets/images/business-partner-6.png"
          alt=""
          fill
          className="!relative"
        />
        <Image
          src="/assets/images/business-partner-7.png"
          alt=""
          fill
          className="!relative"
        />
        <Image
          src="/assets/images/business-partner-8.png"
          alt=""
          fill
          className="!relative"
        />
      </div>
      <div className="relative">
        <Image
          src="/assets/images/turkcure.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="mx-auto"
        />
      </div>
      <div className="bg-blue-600 pb-10 -mt-32  pt-48 text-white p-2">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row">
          <div className="p-4 mb-10 md:mb-0 md:pr-48 whitespace-pre-line">
            {t("our-business-partners-desc")}
          </div>
          <div className="text-center md:text-left">
            <span className="text-black bg-white rounded-3xl px-6 py-4 whitespace-nowrap">
              {t("go-to-turkCure")}
            </span>
          </div>
        </div>
      </div>
      <div className="relative bg-gray01">
        <div className="flex flex-col md:flex-row w-full max-w-screen-xl m-auto">
          <div className="w-full md:h-[658px]">
            <h1 className="text-black text-3xl font-bold uppercase pt-10 mt:pt-36 p-4">
              {t("form-title")}
            </h1>
            <div className="grid grid-cols-2 gap-4 mt-16 p-4">
              <div className="flex flex-col">
                <label className="text-sm mb-2">{t("first-name")}*</label>
                <input
                  type="text"
                  className="bg-white border-gray-300 p-2 border rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-2">{t("last-name")}*</label>
                <input
                  type="text"
                  className="bg-white border-gray-300 p-2 border rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-2">{t("email")}*</label>
                <input
                  type="text"
                  className="bg-white border-gray-300 p-2 border rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-2">{t("phone-number")}*</label>
                <input
                  type="text"
                  className="bg-white border-gray-300 p-2 border rounded-md"
                />
              </div>
            </div>
            <div className="md:mt-10 p-4 md:p-0">
              <span className="bg-darkBlue text-white py-3  px-8 rounded-3xl">
                {t("send")}
              </span>
            </div>
          </div>
          {/* <Image
            src="/assets/images/image-02.png"
            alt=""
            className="!relative hidden md:block md:invisible right-0"
            fill
          /> */}
          <Image
            src="/assets/images/image-02.png"
            alt=""
            fill
            className="!relative md:absolute right-0"
          />
        </div>
      </div>
      <Image
        src="/assets/images/contact-us-bg.png"
        className="!relative w-full object-cover object-right !h-[160px] md:!h-auto"
        alt=""
        fill
      />
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 space-y-2 md:space-y-0 px-4 md:px-0 md:space-x-20 md:pb-40 -mt-40">
        <div className="flex z-40">
          <Image
            src="/assets/images/support.png"
            alt=""
            fill
            className="!relative !w-20 !h-20"
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
