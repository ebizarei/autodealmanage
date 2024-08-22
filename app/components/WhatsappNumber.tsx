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
        href={`https://wa.me/90${
          props.number ? props.number.replaceAll(" ", "") : "5551986890"
        }?text=${props.message ? props.message : ""}`}
        className={props.className}
      >
        <div  className="ltr">{props.number ? props.number : "905551986890"}</div>
      </a>
    );
  return (
    <a
    target="_blank"
      href={
        (!props.number || parseInt(props.number ?? "", 0) > 0 )
          ? `https://wa.me/90${
              props.number ? props.number : "5551986890"
            }?text=${props.message ? props.message : ""}`
          : "#"
      }
      className={props.className}
    >
      <Image src="/assets/svg/call.svg" width={20} height={20} alt="call" />
      <div className="ltr">{props.text ? props.text : "+905551986890"}</div>
    </a>
  );
}

export default WhatsappNumber;
