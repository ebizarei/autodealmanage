import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function Services() {
  const { t } = useTranslation("common");
  return (
    <div className="mt-28">
      <h2 className="text-black text-center text-4xl font-bold">
        <div className="bg-white rounded-full w-20 h-20 mx-auto -mb-12"></div>
        {t("services")}
      </h2>
      <div className="text-center mx-auto mb-16 max-w-[786px] mt-10 text-black font-[500]">
        {t("services-desc")}
      </div>
      <div className="flex flex-col md:flex-row w-full min-h-[372px] gap-2 max-w-screen-xl">
        <Link className="relative flex-1" href="/detail">
          <Image
            src="/assets/images/sales-management.jpg"
            alt="sales-management"
            fill
            className="!relative  rounded-lg"
          />
          <div className="absolute font-bold text-white px-10 text-2xl bottom-4">
            {t("service.sales-management")}
          </div>
        </Link>
        <Link className="relative flex-1" href="/detail">
          <Image
            src="/assets/images/accounting.jpg"
            alt="accounting"
            fill
            className="!relative rounded-lg object-cover"
          />
          <div className="absolute font-bold text-white px-10 text-2xl bottom-4">
            {t("service.accounting")}
          </div>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl mt-2 gap-2">
        <Link className="relative" href="/detail">
          <Image
            src="/assets/images/payment.jpg"
            alt="payment"
            fill
            className="!relative rounded-lg min-w-[350px]"
          />
          <div className="absolute font-bold text-white px-10 text-2xl bottom-4">
            {t("service.payment")}
          </div>
        </Link>
        <div className="flex flex-col space-y-2">
          <Link className="relative" href="/detail">
            <Image
              src="/assets/images/reports-and-dashboards.jpg"
              alt="reports-and-dashboards"
              fill
              className="!relative !h-auto  rounded-lg"
            />
            <div className="absolute font-bold text-white px-10 text-2xl bottom-4">
              {t("service.reports-and-dashboards")}
            </div>
          </Link>

          <Link className="relative" href="/detail">
            <Image
              src="/assets/images/planning.jpg"
              alt="planning"
              fill
              className="!relative !h-auto rounded-lg"
            />
            <div className="absolute font-bold text-white px-10 text-2xl bottom-4">
              {t("service.planning")}
              
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Services;
