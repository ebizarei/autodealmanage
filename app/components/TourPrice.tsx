import React from "react";
import clsx from "clsx";
type Props = {
  bgGray?: boolean;
};
const TourPrice: React.FC<Props> = (props) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-2 text-sm my-4">
      <div
        className={clsx(" text-center rounded-lg", {
          "bg-gray01": props.bgGray,
          "bg-white": !props.bgGray,
        })}
      >
        <div>1 pax</div>
        <div className="font-bold text-lg">€ 220</div>
      </div>
      <div
        className={clsx(" text-center rounded-lg", {
          "bg-gray01": props.bgGray,
          "bg-white": !props.bgGray,
        })}
      >
        <div>2 per pax</div>
        <div className="font-bold text-lg">€ 135</div>
      </div>
      <div
        className={clsx(" text-center rounded-lg", {
          "bg-gray01": props.bgGray,
          "bg-white": !props.bgGray,
        })}
      >
        <div>3 per pax</div>
        <div className="font-bold text-lg">€ 95</div>
      </div>
      <div
        className={clsx(" text-center rounded-lg", {
          "bg-gray01": props.bgGray,
          "bg-white": !props.bgGray,
        })}
      >
        <div>4 per pax</div>
        <div className="font-bold text-lg">€ 80</div>
      </div>
      <div
        className={clsx(" text-center rounded-lg", {
          "bg-gray01": props.bgGray,
          "bg-white": !props.bgGray,
        })}
      >
        <div>5 per pax</div>
        <div className="font-bold text-lg">€ 70</div>
      </div>
      <div
        className={clsx(" text-center rounded-lg", {
          "bg-gray01": props.bgGray,
          "bg-white": !props.bgGray,
        })}
      >
        <div>6 per pax</div>
        <div className="font-bold text-lg">€ 60</div>
      </div>
      <div
        className={clsx(" text-center rounded-lg", {
          "bg-gray01": props.bgGray,
          "bg-white": !props.bgGray,
        })}
      >
        <div>7 per pax</div>
        <div className="font-bold text-lg">€ 55</div>
      </div>
      <div
        className={clsx(" text-center rounded-lg", {
          "bg-gray01": props.bgGray,
          "bg-white": !props.bgGray,
        })}
      >
        <div>8 per pax</div>
        <div className="font-bold text-lg">€ 50</div>
      </div>
      <div
        className={clsx(" text-center rounded-lg", {
          "bg-gray01": props.bgGray,
          "bg-white": !props.bgGray,
        })}
      >
        <div>9 per pax</div>
        <div className="font-bold text-lg">€ 45</div>
      </div>
      <div
        className={clsx(" text-center rounded-lg", {
          "bg-gray01": props.bgGray,
          "bg-white": !props.bgGray,
        })}
      >
        <div>10-15 per pax</div>
        <div className="font-bold text-lg">€ 44</div>
      </div>
      <div
        className={clsx(" text-center rounded-lg", {
          "bg-gray01": props.bgGray,
          "bg-white": !props.bgGray,
        })}
      >
        <div>16-31 per pax</div>
        <div className="font-bold text-lg">€ 40</div>
      </div>
      <div
        className={clsx(" text-center rounded-lg", {
          "bg-gray01": props.bgGray,
          "bg-white": !props.bgGray,
        })}
      >
        <div>32-100 per pax</div>
        <div className="font-bold text-lg">€ 35</div>
      </div>
    </div>
  );
};

export default TourPrice;
