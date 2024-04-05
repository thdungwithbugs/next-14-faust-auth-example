"use client";

import React, { useCallback, useState } from "react";
import Container from "../_components/ui/Container";
import Image from "next/image";
import dynamic from "next/dynamic";
import { mergeClsx } from "@/helpers";
import HtmlParser from "../_common/HtmlParser";
import { getImageUrl } from "../_common/utils/GetImageUrl";

const Slider = dynamic(() => import("../_components/ui/Slider"), {
  ssr: false,
});

const SliderType1 = (data: any) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const onActiveIndexChange = useCallback((swiper: any) => {
    setActiveIndex(swiper.realIndex);
  }, []);
  return (
    <Container className="py-[178px]">
      <h3 className="max-w-[740px] mb-7 text-center font-semibold mx-auto">
        <HtmlParser data={data?.aboveTitle} />
      </h3>
      <div className="mb-1 text-center">
        <span className="text-[#878787]">
          <HtmlParser data={data?.upperTitle} />
        </span>
      </div>
      <div className="mx-auto gap-x-8 gap-y-10">
        <Slider
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          disableArrows={true}
          sliderFluid={true}
          pagination={false}
          customTopNavigation
          onActiveIndexChange={onActiveIndexChange}
          centeredSlides
          initialSlide={1}
          idBlock="SliderType1"
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
              spaceBetween: 21,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 21,
            },
          }}
        >
          {data?.silderList?.length > 0 &&
            data?.silderList?.map((item: any, index: number) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={mergeClsx(
                    isActive ? "shadow-xl pt-0" : "shadow-none pt-2",
                    "h-auto flex flex-col overflow-hidden rounded-md mb-5 transition-all duration-500"
                  )}
                >
                  <Image
                    src={getImageUrl(item?.slideImage)}
                    alt="slider img"
                    width={444}
                    height={361}
                    className={mergeClsx(
                      "h-[361px] w-auto object-cover object-center",
                      !isActive ? "rounded-md" : "rounded-t-md"
                    )}
                  />
                  <div
                    className={mergeClsx(
                      isActive
                        ? "h-full opacity-100"
                        : "h-0 opacity-0 overflow-hidden",
                      "transition-all pt-9 pb-7 px-3 flex flex-col gap-2 relative duration-700"
                    )}
                  >
                    <span className="text-2xl font-semibold">
                      {" "}
                      {item?.slideTitle}
                    </span>
                    <span className="text-[#555555] text-sm">
                      <HtmlParser data={item?.slideDescription} />
                    </span>
                    <div className="absolute flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md -top-5 right-7">
                      <span className="leading-none text-[72px] font-semibold h-10">
                        “
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </Container>
  );
};

export default SliderType1;
