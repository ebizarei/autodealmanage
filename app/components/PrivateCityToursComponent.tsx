import { Trans, useTranslation } from "next-i18next";
import WhatsappNumber from "./WhatsappNumber";
import { Dispatch, SetStateAction } from "react";
import TourPrice from "./TourPrice";
import Image from "next/image";

type Props = {
  setOpen: () => void;
};
const PrivateCityToursComponent: React.FC<Props> = ({ setOpen }: Props) => {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-red-500 font-bold text-2xl p-2 md:p-0 pt-4 ">
          {t("tour-self-photograph-tours")}
        </h1>
        <div className="mb-4 p-2 md:p-0 pt-4">{t("half-day-tour")}</div>
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4 text-darkBlue">
          <div className="col-span-3  p-2 md:p-0">
            <h2 className="text-2xl font-semibold text-darkBlue">
              {t("tour-review")}
            </h2>
            <p className=" text-darkBlue">
              <Trans i18nKey="tour-self-photograph-tours-detail"></Trans>
            </p>
          </div>
          <div className="flex flex-col col-span-2 p-2 md:p-0">
            <div className="font-bold">
              {t("tour-price")} <span className="text-2xl"></span>
            </div>
            <TourPrice bgGray />
            <div className="flex flex-col md:flex-row gap-2 my-8">
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
          <h1 className="text-red-500 font-bold text-2xl p-2 md:p-0 pt-4 ">
            {t("bosphorus-cruise-private")}
          </h1>
          <div className="mb-4 p-2 md:p-0 pt-4">{t("half-day-morning")}</div>
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4 ma-auto text-darkBlue">
            <div className="col-span-3  p-2 md:p-0">
              <h2 className="text-2xl font-semibold text-darkBlue">
                {t("tour-review")}
              </h2>
              <p className=" text-darkBlue">
                <Trans i18nKey="bosphorus-cruise-private-detail"></Trans>
              </p>
            </div>
            <div className="col-span-2 flex flex-col p-2 md:p-0">
              <div className="font-bold">
                {t("tour-price")} <span className="text-2xl"></span>
              </div>
              <TourPrice />

              <Trans i18nKey="bosphorus-cruise-private-sub-desc"></Trans>
              <div className="flex flex-col md:flex-row gap-2 mt-auto">
                <div
                  onClick={() => setOpen()}
                  className="bg-gray01 border border-gray-300 rounded-3xl whitespace-nowrap py-3 px-4 cursor-pointer"
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
          <h1 className="text-red-500 font-bold text-2xl p-2 md:p-0 pt-4 ">
            {t("troy-galataport")}
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4 ma-auto text-darkBlue">
            <div className="col-span-3  p-2 md:p-0">
              <h2 className="text-2xl font-semibold text-darkBlue">
                {t("tour-review")}
              </h2>
              <p className=" text-darkBlue">
                <Trans i18nKey="troy-galataport-detail"></Trans>
              </p>
            </div>
            <div className="flex flex-col col-span-2 p-2 md:p-0">
              <div className="font-bold">
                {t("tour-price")} <span className="text-2xl"></span>
              </div>
              <TourPrice bgGray />
              <div>
                <Trans i18nKey={"bosphorus-cruise-sub-desc"}></Trans>
              </div>
              <div className="flex flex-col md:flex-row gap-2 mt-8">
                <div
                  onClick={() => setOpen()}
                  className="bg-gray01 border border-gray-300 rounded-3xl whitespace-nowrap py-3 px-4 cursor-pointer"
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
      <div className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto py-4">
          <h1 className="text-red-500 font-bold text-2xl p-2 md:p-0 pt-4 ">
            {t("helicopter-tour")}
          </h1>
          <div className="mb-4 p-2 md:p-0 pt-4">{t("half-day-morning")}</div>
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4 ma-auto text-darkBlue">
            <div className="col-span-3  p-2 md:p-0">
              <h2 className="text-2xl font-semibold text-darkBlue">
                {t("tour-review")}
              </h2>
              <p className=" text-darkBlue">
                <Trans i18nKey="helicopter-tour-detail"></Trans>
              </p>
            </div>
            <div className="col-span-2 flex flex-col p-2 md:p-0" >
              <div className="font-bold">
                {t("tour-price")} <span className="text-2xl"></span>
              </div>
              <TourPrice />

              <Trans i18nKey="helicopter-tour-sub-desc"></Trans>
              <div className="flex flex-col md:flex-row gap-2 mt-auto">
                <div
                  onClick={() => setOpen()}
                  className="bg-gray01 border border-gray-300 rounded-3xl whitespace-nowrap py-3 px-4 cursor-pointer"
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
          <h1 className="text-red-500 font-bold text-2xl p-2 md:p-0 pt-4 ">
            {t("private-yacht-rent")}
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4 ma-auto text-darkBlue">
            <div className="col-span-3  p-2 md:p-0">
              <h2 className="text-2xl font-semibold text-darkBlue">
                {t("tour-review")}
              </h2>
              <p className=" text-darkBlue">
                <Trans i18nKey="private-yacht-rent-detail"></Trans>
              </p>
            </div>
            <div className="flex flex-col col-span-2 p-2 md:p-0 p-2 md:p-0">
              <div className="font-bold">
                {t("tour-price")} <span className="text-2xl"></span>
              </div>
              <TourPrice bgGray />

              <div>
                <Trans i18nKey={"private-yacht-rent-sub-desc"}></Trans>
              </div>
              <div className="bg-red-100 text-red-500 my-4 rounded-2xl text-sm px-4 py-2">
                <Trans i18nKey={"private-yacht-rent-alert"}></Trans>
              </div>
              <div className="flex flex-col md:flex-row gap-2 mt-auto">
                <div
                  onClick={() => setOpen()}
                  className="bg-gray01 border border-gray-300 rounded-3xl whitespace-nowrap py-3 px-4 cursor-pointer"
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

export default PrivateCityToursComponent;
