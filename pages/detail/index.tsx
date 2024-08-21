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
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ["common"], null, ["en"])),
    },
  };
}

export default Detail;
