import { offers } from "@/constants/home";
import Image, { type ImageProps } from "next/image";
import { Fragment } from "react";
import Heading from "./elements/heading";

export type Offer = {
  title: string;
  image: ImageProps;
};

const WhatWeOffer = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-y-[40px]">
        <Heading id={1} title="WHAT WE OFFER" className="col-span-2" />
        {offers.map(({ title, image: { alt, ...imageProps } }, index) => {
          const text = (
            <h4 className="font-poppins font-medium text-[24px] leading-[36px] text-[#262626]">
              {title}
            </h4>
          );
          const image = <Image {...imageProps} alt={alt} draggable={false} />;
          return (
            <Fragment key={index}>
              {!(index & 1) ? text : image}
              {!(index & 1) ? image : text}
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default WhatWeOffer;
