import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function SpecialTours() {
  const { t } = useTranslation("common");
  return (
    <div className="relative mt-28 max-w-full w-full pb-[150px]">
      <h2 className="relative text-black text-center text-4xl font-bold  z-20">
        <div className="bg-black rounded-full w-20 h-20 mx-auto -mb-12"></div>
        {t("special-tours")}
      </h2>
      <div className="max-w-screen-xl mx-auto relative flex gap-6 mt-12 z-20">
        <Link className="relative" href="/detail">
          <Image
            src="/assets/images/special-tours-01.jpg"
            alt=""
            fill
            className="!relative rounded-2xl"
          />
        </Link>

        <Link className="relative" href="/detail">
          <Image
            src="/assets/images/special-tours-02.jpg"
            alt=""
            fill
            className="!relative rounded-2xl"
          />
        </Link>

        <Link className="relative" href="/detail">
          <Image
            src="/assets/images/special-tours-03.jpg"
            alt=""
            fill
            className="!relative rounded-2xl"
          />
        </Link>
      </div>
      <Image
        src={"/assets/images/special-tours-bg.png"}
        fill
        className="z-10"
        alt="special tours"
      />
    </div>
  );
}
export default SpecialTours;
