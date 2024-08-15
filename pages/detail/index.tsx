import React from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import WhatsappNumber from "@/app/components/WhatsappNumber";
import Tours_Fa from "@public/tours/fa.json";
import Tours_Tr from "@public/tours/tr.json";
import Tours_En from "@public/tours/en.json";
import { useRouter } from "next/router";
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { react } from "@/next-i18next.config";

function SwiperCustom(props: { tour: (typeof Tours_Fa)[0]; j: number }) {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperClass | null>(
    null
  );
  const [mainSwiper, setMainSwiper] = React.useState<SwiperClass | null>(null);
  const { t } = useTranslation("common");
  const [show, setShow] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  React.useEffect(() => {
    setShow(true);
  }, []);
  if (!show) return <></>;
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <div className=" max-w-[92vw] md:max-w-[500px]">
          {thumbsSwiper && (
            <Swiper
              onSwiper={(swiper) => {
                setMainSwiper(swiper);
              }}
              spaceBetween={10}
              loop
              slidesPerView={1}
              navigation
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs]}
              onSlideChange={(x) => setSelected(x.activeIndex)}
              className="mySwiper2 mb-2"
            >
              {props.tour.items
                .filter((x) => x.description != undefined)
                .map((item, i) => (
                  <SwiperSlide key={`swiper-${item.title}-${i}`}>
                    <Image
                      src={`/assets/images/tours/${props.j}/${i}/0.jpg`}
                      fill
                      alt=""
                      className="!relative rounded-xl "
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
          <Swiper
            onSlideChange={(x) => console.log("slide change", x)}
            onSwiper={(swiper) => {
              setThumbsSwiper(swiper);
            }}
            onDestroy={() => console.log("i destroyed")}
            onBeforeDestroy={() => setThumbsSwiper(null)}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress
            modules={[Thumbs]}
            className="mySwiper"
          >
            {props.tour.items
              .filter((x) => x.description != undefined)
              .map((item, i) => (
                <SwiperSlide key={`thumbs-${item.title}-${i}`}>
                  <Image
                    src={`/assets/images/tours/${props.j}/${i}/0.jpg`}
                    fill
                    alt=""
                    className="!relative rounded-md "
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <div className="flex-1 py-4 md:p-4 space-y-4">
        {props.tour.items.map((item, i) => (
          <div key={item.title} className="relative">
            <div
              className="flex font-bold space-x-4 cursor-pointer"
              onClick={(_) => mainSwiper?.slideTo(i)}
            >
              <span
                className={clsx(
                  "rounded-full  w-8 h-8 py-1 text-center  after:content-[' '] after:w-1 after:border-r after:border-dashed after:border-0.5 after:-ms-[3px] after:h-[60%] after:absolute after:top-10 ",
                  {
                    "after:hidden": i === props.tour.items.length - 1,
                    "bg-red01 after:border-red01 text-white": i === selected,
                    "bg-white border text-darkBlue border-darkBlue after:border-darkBlue":
                      i !== selected,
                  }
                )}
              >
                {i + 1}
              </span>
              <span className="my-auto font-bold">{item.title}</span>
            </div>
            <div className="ps-14">{item.description}</div>
            <div className="ps-14 font-bold">
              {t("visiting-hours")}:{" "}
              <span className="text-red01">{item["visiting-hours"]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Detail() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [tab, setTab] = React.useState("all");

  const [open, setOpen] = React.useState(false);
  const handleModal = () => {
    setOpen(!open);
  };
  const handleTabClick = () => {
    setOpen(!open);
  };

  const data = React.useMemo(() => {
    return router.locale === "fa"
      ? Tours_Fa
      : router.locale === "en"
      ? Tours_En
      : Tours_Tr;
  }, [router.locale]);

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl m-auto md:p-4">
        <div className="p-4 text-darkBlue text-2xl font-bold">{t("welcome")}</div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-4 text-[12px] text-justify">{t("about-super-pay")}</div>
          <div className="flex-1 relative w-full min-h-60">
            <Image src={"/assets/images/detail-header.png"} alt="" className="object-contain" fill />
          </div>
        </div>
        <div className="space-x-2 space-y-2 p-4">
          {data.map((tour, j) => (
            <a
              key={j}
              href={`#${tour["title"].replaceAll(" ", "-")}`}
              className="inline-block bg-gray-100 border p-2 px-4 text-[10px] rounded-xl font-semibold text-gray-400 uppercase"
            >
              {tour["key-word"]}
            </a>
          ))}
        </div>
        <div className="space-y-4 ">
          {data.map((tour, j) => (
            <div key={tour.title} className="space-y-2 py-1 odd:bg-gray-50">
              <div className="space-y-4 max-w-screen-xl m-auto p-4">
                <div className="space-x-4 rounded-lg text-center bg-gradient-to-r from-darkBlue to-red01 text-white py-4  font-bold text-lg  uppercase  ps-4">
                  <span>{tour.title}</span>
                  {/* <span className="h-1 mt-5 bg-darkBlue w-full"></span> */}
                </div>
                <div className="text-center">{tour.description}</div>
                <div className="flex">
                  <span
                    className="-mt-48"
                    id={`${tour?.title?.replaceAll(" ", "-")}`}
                  ></span>
                  <SwiperCustom tour={tour} j={j} />
                </div>

                <div className="text-center md:text-end">
                  <WhatsappNumber
                    text={t("reserve-now")}
                    className="inline-flex text-white gap-2 text-sm bg-darkBlue py-3 px-4 rounded-3xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], null, ["en"])),
    },
  };
}

export default Detail;
