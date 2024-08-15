import { Trans, useTranslation } from "next-i18next";
import WhatsappNumber from "./WhatsappNumber";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type Props = {
  setOpen: () => void;
};
const RegularCityToursComponent: React.FC<Props> = ({ setOpen }: Props) => {
  const { t } = useTranslation("common");
  return (
    <div >
      <div className="max-w-screen-xl mx-auto pb-8">
        <h1 className="text-red-500 font-bold text-2xl p-2 md:p-0 pt-4">
          {t("byzantine-ottoman-relics")}
        </h1>
        <div className="mb-4 p-2 md:p-0 pt-4">{t("full-day-tour")}</div>
        <div className="p-2 md:p-0 flex flex-col md:flex-row gap-2">
          <div>
            <Image
              src="/assets/images/byzantine-ottoman-relics-01.png"
              alt=""
              fill
              className="!relative"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/assets/images/byzantine-ottoman-relics-02.png"
              alt=""
              fill
              className="!relative"
            />
            <div className="flex flex-col md:flex-row gap-2">
              <Image
                src="/assets/images/byzantine-ottoman-relics-03.png"
                alt=""
                fill
                className="!relative"
              />
              <Image
                src="/assets/images/byzantine-ottoman-relics-04.png"
                alt=""
                fill
                className="!relative"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5  gap-4 pt-4 text-darkBlue">
          <div className="col-span-3  p-2 md:p-0 ">
            <h2 className="text-2xl font-semibold text-darkBlue">
              {t("tour-review")}
            </h2>
            <p className=" text-darkBlue">
              <Trans i18nKey="byzantine-ottoman-relics-detail"></Trans>
            </p>
          </div>
          <div className="flex flex-col col-span-2  p-2 md:p-0 ">
            <div className="font-bold">
              {t("brochure-rate")} <span className="text-2xl">€ 180</span>
            </div>
            <div>{t("byzantine-ottoman-relics-vat")}</div>
            <div>{t("byzantine-ottoman-relics-vat-sub-desc")}</div>
            <div className="bg-red-100 text-red-500 rounded-2xl text-sm px-4 py-2 mt-4 mb-2">
              {t("not-operate-on-fridays")}
            </div>
            <div className="flex flex-col md:flex-row gap-2 mt-auto">
              <div
                onClick={() => setOpen()}
                className="bg-gray01 border border-gray-300 rounded-3xl whitespace-nowrap py-3 px-4 cursor-pointer text-sm"
              >
                {t("general-information")}
              </div>
              <div>
                <WhatsappNumber
                  number={t("reserve-now")}
                  className="flex text-white gap-2 bg-darkBlue py-3 px-4 rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto py-4">
          <h1 className="text-red-500 font-bold text-2xl p-2 md:p-0 pt-4">
            {t("tour-combo-istanbul")}
          </h1>
          <div className="mb-4 p-2 md:p-0 pt-4">{t("full-day-tour")}</div>
          <div className="p-2 md:p-0 flex flex-col md:flex-row gap-2">
            <div>
              <Image
                src="/assets/images/byzantine-ottoman-relics-01.png"
                alt=""
                fill
                className="!relative"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src="/assets/images/byzantine-ottoman-relics-02.png"
                alt=""
                fill
                className="!relative"
              />
              <div className="flex  gap-2">
                <Image
                  src="/assets/images/byzantine-ottoman-relics-03.png"
                  alt=""
                  fill
                  className="!relative"
                />
                <Image
                  src="/assets/images/byzantine-ottoman-relics-04.png"
                  alt=""
                  fill
                  className="!relative"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 p-2 md:p-0 gap-4 pt-4 ma-auto text-darkBlue">
            <div className="col-span-3  p-2 md:p-0 ">
              <h2 className="text-2xl font-semibold text-darkBlue">
                {t("tour-review")}
              </h2>
              <p className=" text-darkBlue">
                <Trans i18nKey="tour-combo-istanbul-detail"></Trans>
              </p>
            </div>
            <div className="col-span-2">
              <div className="font-bold">
                {t("brochure-rate")} <span className="text-2xl">€ 90</span>
              </div>
              <div>{t("tour-combo-istanbul-vat")}</div>
              <div className="flex flex-col md:flex-row gap-2 mt-4">
                <div
                  onClick={() => setOpen()}
                  className="bg-gray01 border border-gray-300 rounded-3xl whitespace-nowrap py-3 px-4 cursor-pointer text-sm"
                >
                  {t("general-information")}
                </div>
                <div>
                  <WhatsappNumber
                    number={t("reserve-now")}
                    className="flex text-white gap-2 bg-darkBlue py-3 px-4 rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-screen-xl mx-auto py-4">
          <h1 className="text-red-500 font-bold text-2xl p-2 md:p-0 pt-4">
            {t("bosphorus-cruise")}
          </h1>
          <div className="mb-4 p-2 md:p-0 pt-4">{t("full-day-tour")}</div>
          <div className="p-2 md:p-0 flex flex-col md:flex-row gap-2">
            <div>
              <Image
                src="/assets/images/byzantine-ottoman-relics-01.png"
                alt=""
                fill
                className="!relative"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src="/assets/images/byzantine-ottoman-relics-02.png"
                alt=""
                fill
                className="!relative"
              />
              <div className="flex  gap-2">
                <Image
                  src="/assets/images/byzantine-ottoman-relics-03.png"
                  alt=""
                  fill
                  className="!relative"
                />
                <Image
                  src="/assets/images/byzantine-ottoman-relics-04.png"
                  alt=""
                  fill
                  className="!relative"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5  gap-4 pt-4 ma-auto text-darkBlue">
            <div className="col-span-3  p-2 md:p-0 ">
              <h2 className="text-2xl font-semibold text-darkBlue">
                {t("tour-review")}
              </h2>
              <p className=" text-darkBlue">
                <Trans i18nKey="bosphorus-cruise-detail"></Trans>
              </p>
            </div>
            <div className="flex flex-col col-span-2  p-2 md:p-0 ">
              <div className="font-bold">
                {t("brochure-rate")} <span className="text-2xl">€ 90</span>
              </div>
              <div>{t("bosphorus-cruise-vat")}</div>
              <div>
                <Trans i18nKey={"bosphorus-cruise-sub-desc"}></Trans>
              </div>
              <div className="bg-red-100 text-red-500 rounded-2xl text-sm px-4 py-2 mt-4 mb-2">
                {t("bosphorus-cruise-alert")}
              </div>
              <div className="flex flex-col md:flex-row gap-2 mt-auto">
                <div
                  onClick={() => setOpen()}
                  className="bg-gray01 border border-gray-300 rounded-3xl whitespace-nowrap py-3 px-4 cursor-pointer text-sm"
                >
                  {t("general-information")}
                </div>
                <div>
                  <WhatsappNumber
                    number={t("reserve-now")}
                    className="flex text-white gap-2 bg-darkBlue py-3 px-4 rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularCityToursComponent;
