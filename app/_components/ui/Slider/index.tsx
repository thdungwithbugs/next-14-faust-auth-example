"use client";
import "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";

import clsx from "clsx";
import React, {
  Ref,
  forwardRef,
  memo,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { ISliderProps } from "./type";
import { mergeClsx } from "@/helpers";

export const TriangleArrow = ({ svgClassName }: { svgClassName?: string }) => {
  return (
    <svg
      width="17"
      height="30"
      viewBox="0 0 17 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClassName}
    >
      <path
        d="M15.0714 2.46326L1.92847 15.056L15.0714 27.6487"
        stroke="#737373"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const TriangleNavigateButtonLeft = ({
  className,
  svgClassName,
}: {
  className?: string;
  svgClassName?: string;
}) => {
  return (
    <div
      className={clsx(
        "p-4 rounded-md shadow-lg group-disabled:border-gray-300 transition-all w-16 aspect-square flex items-center justify-center ring-1 ring-[#E8E8E8]",
        className
      )}
    >
      <TriangleArrow svgClassName={svgClassName} />
    </div>
  );
};

const TriangleNavigateButtonRight = ({
  className,
  svgClassName,
}: {
  className?: string;
  svgClassName?: string;
}) => {
  return (
    <div
      className={clsx(
        "p-4 rounded-md shadow-lg group-disabled:border-gray-300 transition-all w-16 aspect-square flex items-center justify-center ring-1 ring-[#E8E8E8]",
        className
      )}
    >
      <TriangleArrow svgClassName={svgClassName} />
    </div>
  );
};

function Slider(
  {
    children,
    loop = false,
    bonusHeight = 0,
    autoplay,
    modules,
    slidesPerView = 1,
    bordered,
    beTabs,
    withArrowBackground = false,
    sliderFluid,
    initialSlide = 0,
    swiperSlideClass,
    clickable = true,
    className,
    disableArrows = true,
    paginationOutside = false,
    breakpoints,
    isFallback = false,
    navigation = true,
    customNavigation = false,
    pagination,
    layout,
    injectStyles = [],
    rewind = false,
    maxLengthElement = undefined,
    dataLength = undefined,
    paginationType = "bullets",
    arrowBtnClassName = "",
    onActiveIndexChange,
    effect,
    grabCursor = false,
    centeredSlides = false,
    coverflowEffect,
    slideNavigationBottom = false,
    effectCoverflow = false,
    idBlock,
    scrollbar,
    customTopNavigation,
    customContainerOnlySliderCls = "",
    customTopNavigationCls = "",
    ...props
  }: ISliderProps,
  ref: Ref<any>
) {
  useImperativeHandle(ref, () => ({
    children,
    loop,
    bonusHeight,
    autoplay,
    modules,
    slidesPerView,
    bordered,
    beTabs,
    withArrowBackground,
    sliderFluid,
    initialSlide,
    swiperSlideClass,
    clickable,
    className,
    disableArrows,
    paginationOutside,
    breakpoints,
    isFallback,
    navigation,
    idBlock,
    customNavigation,
    pagination,
    injectStyles,
    rewind,
    maxLengthElement,
    dataLength,
    paginationType,
    arrowBtnClassName,
    onActiveIndexChange,
    effect,
    grabCursor,
    centeredSlides,
    coverflowEffect,
    layout,
    scrollbar,
    customTopNavigation,
    customContainerOnlySliderCls,
    customTopNavigationCls,
    ...props,
  }));
  const sliderRef = useRef<SwiperRef | null>(null);
  const id = useId();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [commonHeight, setCommonHeight] = useState<number | null>(null);

  useEffect(() => {
    window.addEventListener("resize", getCommonHeight);

    return () => {
      window.removeEventListener("resize", getCommonHeight);
    };
  }, []);

  useEffect(() => {
    if (!sliderRef.current) return;
    getCommonHeight();

    return () => {
      setCommonHeight(null);
    };
  }, []);

  const getCommonHeight = () => {
    if (!sliderRef.current) return;

    const list: Element[] = (sliderRef.current as any)?.querySelectorAll(
      ".swiper-slide"
    );
    const listClientHeight = [...Array.from(list)]?.map((el: Element) => {
      return el?.clientHeight;
    });
    const max = Math.max(...listClientHeight);
    setCommonHeight(maxLengthElement && dataLength ? maxLengthElement : max);
  };

  useEffect(() => {
    if (sliderRef.current && isFallback) {
      sliderRef.current.swiper.slideTo(0, 0, true);
    }
  });

  useEffect(() => {
    if (!sliderRef.current || !autoplay || !loop) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sliderRef.current?.swiper.autoplay.start();
          } else {
            sliderRef.current?.swiper.autoplay.stop();
          }
        });
      },
      { threshold: 0.5 }
    );

    observerRef.current.observe(sliderRef.current as any);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [observerRef]);

  return (
    <div
      className={clsx(
        paginationOutside && "overflow-hidden ",
        "relative mx-auto",
        "w-full"
      )}
      id="1"
    >
      {customTopNavigation && (
        <div
          className={mergeClsx(
            "flex items-center justify-center gap-8 md:justify-between mb-11",
            customTopNavigationCls
          )}
        >
          <button
            className={clsx(
              `swiper-arrow-left${idBlock} cursor-pointer disabled:cursor-not-allowed group transition`
            )}
          >
            <TriangleNavigateButtonLeft
              svgClassName="text-[#2295D8] group-disabled:text-gray-300 group-hover:scale-110 transition-all"
              className="bg-white"
            />
          </button>
          <button
            className={clsx(
              `swiper-arrow-right${idBlock} cursor-pointer disabled:cursor-not-allowed group transition`
            )}
          >
            <TriangleNavigateButtonRight
              svgClassName="text-[#2295D8] group-disabled:text-gray-300 group-hover:scale-110 transition-all rotate-180"
              className="bg-white"
            />
          </button>
        </div>
      )}
      <div className={customContainerOnlySliderCls}>
        <Swiper
          key={id}
          effect={effect}
          grabCursor={grabCursor}
          centeredSlides={centeredSlides}
          coverflowEffect={coverflowEffect}
          onActiveIndexChange={onActiveIndexChange}
          initialSlide={initialSlide}
          runCallbacksOnInit={false}
          scrollbar={scrollbar}
          pagination={
            pagination && paginationType === "range"
              ? {
                  clickable: true,
                  type: "custom",
                  renderCustom: function (swiper, current, total) {
                    const percent = (100 / total) * current;
                    const activeStyle = `bg-primary-700`;

                    return `
                <div class="relative h-1 w-[72px] mx-auto bg-gray-300 rounded-full overflow-hidden transition-all">
                  <div class="absolute left-0 top-0 h-full ${activeStyle} rounded-full" style="width:${percent}%;"></div>
                </div>
              `;
                  },
                }
              : pagination &&
                paginationType !== "range" &&
                paginationType !== "custom"
              ? {
                  clickable: true,
                }
              : undefined
          }
          rewind={rewind}
          className={clsx(
            bordered &&
              'relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gray-600 after:content-[""]',
            beTabs && "tabs-slide",
            withArrowBackground && "slider-arrow-with-background",
            sliderFluid && "slider-fluid",
            disableArrows && "slider-disabled-arrow",
            paginationOutside && "slider-pagination-outside",
            paginationType,
            className
          )}
          loop={loop}
          ref={sliderRef}
          autoplay={autoplay}
          breakpoints={breakpoints}
          keyboard={{
            enabled: true,
          }}
          slidesPerView={slidesPerView}
          navigation={{
            nextEl: ".swiper-arrow-right" + idBlock,
            prevEl: ".swiper-arrow-left" + idBlock,
          }}
          modules={
            modules
              ? modules
              : effectCoverflow
              ? [
                  EffectCoverflow,
                  Autoplay,
                  Keyboard,
                  Pagination,
                  Scrollbar,
                  Navigation,
                ]
              : [Autoplay, Keyboard, Pagination, Scrollbar, Navigation]
          }
          {...props}
        >
          {React.Children?.map(
            children as any,
            (child: React.ReactNode, index: number) => {
              if (maxLengthElement && dataLength && index === dataLength - 1) {
                return null;
              }

              return (
                <SwiperSlide
                  style={{
                    height:
                      bonusHeight === "auto"
                        ? "auto"
                        : commonHeight
                        ? commonHeight + Number(bonusHeight)
                        : "auto",
                  }}
                  className={clsx("h-auto", swiperSlideClass)}
                  key={index}
                >
                  {child}
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
      {slideNavigationBottom && (
        <div className="flex items-center justify-center gap-8 mt-10 md:justify-start">
          <button
            className={clsx(
              `swiper-arrow-left${idBlock} cursor-pointer disabled:cursor-not-allowed group transition`
            )}
          >
            <TriangleNavigateButtonLeft svgClassName="text-[#2295D8] group-disabled:text-gray-300 group-hover:scale-110 transition-all " />
          </button>
          <button
            className={clsx(
              `swiper-arrow-right${idBlock} cursor-pointer disabled:cursor-not-allowed group transition`
            )}
          >
            <TriangleNavigateButtonRight svgClassName="text-[#2295D8] group-disabled:text-gray-300 group-hover:scale-110 transition-all" />
          </button>
        </div>
      )}
    </div>
  );
}

export default memo(forwardRef(Slider));
