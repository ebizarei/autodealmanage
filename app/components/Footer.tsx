import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import WhatsappNumber from "./WhatsappNumber";

function Footer() {
  const { i18n } = useTranslation();
  const { language: currentLanguage } = i18n;
  const router = useRouter();
  const locales = router.locales ?? [currentLanguage];
  const languageNames = ["tr", "en"];
  const [value, setValue] = useState({
    value: i18n.language,
    label: languageNames.find((x) => x === currentLanguage) ?? currentLanguage,
  });

  const switchToLocale = useCallback(
    (locale: string) => {
      const path = router.asPath;

      return router.push(path, path, { locale });
    },
    [router]
  );

  const languageChanged = useCallback(
    async (option: any) => {
      setValue(option);

      const locale = option.value;

      if (option.onChange) {
        option.onChange(locale);
      }

      await switchToLocale(locale);
    },
    [switchToLocale]
  );
  return (
    <div className="bg-white pt-20 border-t p-4 md:p-auto ">
      <div className="max-w-screen-xl text-[#504E61] mx-auto ">
        <div className="flex">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="flex flex-col ">
              <a className="text-black font-bold">Services</a>
              <a>Corporate Travel</a>
              <a>Flight ticket</a>
              <a>Accomodation</a>
              <a>Cultural Tours</a>
              <a>Transfer Services</a>
            </div>
            <div className="flex flex-col ">
              <a className="text-black font-bold">Support</a>
              <a>Contact us</a>
              <a>FAQs</a>
            </div>
            <div className="flex flex-col ">
              <a className="text-black font-bold">Contract</a>
              <a>Distance Selling Agreement</a>
              <a>Superpay User Agreement</a>
              <a>KVKK</a>
            </div>
            <div className="flex flex-col ">
              <a className="text-black font-bold">Health tourism</a>
            </div>
            <div></div>
            <div>
              <div className="relative h-8 w-full">
                <Image src="/assets/images/socials.png" alt="" fill />
              </div>
              <WhatsappNumber className="flex text-white gap-2 mt-6 bg-darkBlue py-3 px-4 rounded-3xl" />

              <select
                onChange={(e) =>
                  languageChanged({
                    value: e.target.value,
                    lable: e.target.value,
                  })
                }
                defaultValue={currentLanguage}
                className="border border-gray-100 bg-white text-black w-full mt-4 p-4"
              >
                <option  value="fa">
                  Fa
                </option>
                <option  value="tr">
                  Tr
                </option>
                <option value="en">
                  En
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-20 pb-8 hidden md:block relative">
          <Image
            src="/assets/images/footer-logos.png"
            alt=""
            fill
            className="object-contain object-left"
          />
        </div>
        <div className="text-sm w-full py-6 mt-6  border-t border-x-gray01">
          <div className="flex flex-col md:flex-row md:space-x-10 text-center mf:text-left ">
            <div className="md:mr-40">Copyright © 2022. Dealer Management System</div>
            <div>Terms and Conditions</div>
            <div>Privacy Policy</div>
            <div>Manage Cookies</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
