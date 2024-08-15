import Image from "next/image";
import { useTranslation } from "next-i18next";

function Statistic() {
  const { t } = useTranslation("common");
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-20">
      <div className="flex flex-col p-4 md:p-16">
        <div className="font-semibold text-5xl text-[#1892AC] mb-4">12+</div>
        <div className="">{t("statistic-01")}</div>
      </div>
      <div className="flex flex-col p-4 md:p-16">
        <div className="font-semibold text-5xl text-[#AA1955] mb-4">6K</div>
        <div className="whitespace-pre-line">{t("statistic-02")}</div>
      </div>
      <div className="flex flex-col p-4 md:p-16">
        <div className="font-semibold text-5xl text-[#F7425F] mb-4">73%</div>
        <div className="whitespace-pre-line">
        {t("statistic-03")}
        </div>
      </div>
      <div className="flex flex-col p-4 md:p-16">
        <div className="font-semibold text-5xl text-[#F78160] mb-4">17+</div>
        <div className="whitespace-pre-line">
        {t("statistic-04")}
        </div>
      </div>
    </div>
  );
}
export default Statistic;
