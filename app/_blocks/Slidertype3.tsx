import React from "react";
import Container from "../_components/ui/Container";
import dynamic from "next/dynamic";
import { mergeClsx } from "@/helpers";
import Link from "next/link";
import Image from "next/image";

const Slider = dynamic(() => import("../_components/ui/Slider"), {
  ssr: false,
});

const StarIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z"
        fill="#F4BC61"
      />
    </svg>
  );
};

export default async function SliderType3() {
  return (
    <div className={`bg-white mb-[220px]`}>
      <Container className="py-7" noPaddingRight>
        <span className="uppercase text-[30px] text-[#626262] leading-[70px]">
          TESTIMONIAL
        </span>
        <h3 className="max-w-[740px] text-left font-semibold text-black">
          What our client say
        </h3>
        <div className="mb-1 text-left max-w-[443px]">
          <span className="text-[#626262] leading-[40px]">
            Create a visual identity for your company and a overall brand
          </span>
        </div>
      </Container>
      <div
        className={`relative mx-auto -mb-[220px] gap-x-8 gap-y-10 pb-[178px] pl-[70px]`}
      >
        <Slider
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
          loop
          disableArrows={true}
          sliderFluid={true}
          pagination={false}
          customTopNavigation
          customTopNavigationCls="md:justify-end pr-[70px]"
          idBlock="SliderType2"
          autoHeight
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
          }}
        >
          {[0, 1, 2, 3, 4, 5].length > 0 &&
            [0, 1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-8 p-12 bg-white rounded-md shadow-lg pt-11 "
              >
                <Image
                  src={
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="avatar"
                  width={130}
                  height={130}
                  className="relative object-contain object-center overflow-hidden rounded-full"
                />
                <div className="relative flex flex-col items-center justify-center gap-2">
                  <span className="text-2xl font-semibold text-black">
                    Cristian Daniel
                  </span>
                  <span className="text-[#858585] font-medium">Treveller</span>
                </div>
                <div className="flex flex-col flex-1 gap-4">
                  <div className="flex items-center gap-2">
                    {[0, 1, 2, 3, 4].map((item, index) => (
                      <StarIcon key={index} />
                    ))}
                  </div>
                  <span className="text-[#858585] text-lg leading-[28px]">
                    Before we define any approach, we need to deline the brands
                    overall goal. We then need to dive.
                  </span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}
