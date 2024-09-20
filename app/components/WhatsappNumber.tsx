import Image from "next/image";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { HTMLProps } from "react";

type WhatsappNumberProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  keyof HTMLProps<HTMLDivElement>
> &
  HTMLProps<HTMLDivElement> & {
    numberOnly?: boolean;
    message?: string;
    number?: string;
    text?: string;
  };
function WhatsappNumber(props: WhatsappNumberProps) {
  if (props.numberOnly)
    return (
      <a
        href={`https://wa.me/98${
          props.number ? props.number.replaceAll(" ", "") : "9121789348"
        }?text=${props.message ? props.message : ""}`}
        className={props.className}
      >
        <div  className="ltr">{props.number ? props.number : "989121789348"}</div>
      </a>
    );
  return (
    <a
    target="_blank"
      href={
        (!props.number || parseInt(props.number ?? "", 0) > 0 )
          ? `https://wa.me/98${
              props.number ? props.number : "9121789348"
            }?text=${props.message ? props.message : ""}`
          : "#"
      }
      className={props.className}
    >
      <Image src="/assets/svg/call.svg" width={20} height={20} alt="call" />
      <div className="ltr">{props.text ? props.text : "+989121789348"}</div>
    </a>
  );
}

export default WhatsappNumber;
