import React from "react";
import Container from "../_components/ui/Container";
import dynamic from "next/dynamic";
import { mergeClsx } from "@/helpers";
import Link from "next/link";

const Slider = dynamic(() => import("../_components/ui/Slider"), {
  ssr: false,
});

const SampleIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M59.2072 20.1381H46.114C44.3782 20.1398 42.7141 20.8404 41.4868 22.0861C40.2594 23.3318 39.5691 25.0208 39.5674 26.7825V40.0714C39.5685 41.2459 40.0287 42.3719 40.847 43.2024C41.6652 44.0328 42.7746 44.4999 43.9318 44.5011V60.0048C43.9329 61.1793 44.3931 62.3053 45.2114 63.1357C46.0296 63.9662 47.139 64.4333 48.2962 64.4344H57.025C58.1821 64.4333 59.2916 63.9662 60.1098 63.1357C60.928 62.3053 61.3882 61.1793 61.3894 60.0048V44.5011C62.5465 44.4999 63.656 44.0328 64.4742 43.2024C65.2924 42.3719 65.7526 41.2459 65.7538 40.0714V26.7825C65.7521 25.0208 65.0618 23.3318 63.8344 22.0861C62.6071 20.8404 60.9429 20.1398 59.2072 20.1381ZM61.3894 40.0714H57.025V60.0048H48.2962V40.0714H43.9318V26.7825C43.9318 26.1951 44.1617 25.6318 44.5709 25.2164C44.9802 24.801 45.5352 24.5677 46.114 24.5677H59.2072C59.7859 24.5677 60.341 24.801 60.7502 25.2164C61.1595 25.6318 61.3894 26.1951 61.3894 26.7825V40.0714Z"
        fill="white"
      />
      <path
        d="M43.9318 9.06397C43.9318 7.31172 44.4437 5.59883 45.4028 4.1419C46.362 2.68496 47.7252 1.54941 49.3202 0.878861C50.9152 0.208306 52.6703 0.0328589 54.3635 0.374704C56.0567 0.71655 57.612 1.56034 58.8328 2.79936C60.0535 4.03838 60.8849 5.61699 61.2217 7.33557C61.5585 9.05414 61.3856 10.8355 60.725 12.4543C60.0643 14.0732 58.9455 15.4569 57.5101 16.4304C56.0746 17.4039 54.387 17.9235 52.6606 17.9235C50.3463 17.9211 48.1274 16.987 46.4909 15.326C44.8545 13.665 43.9341 11.4129 43.9318 9.06397ZM48.2962 9.06397C48.2962 9.94009 48.5521 10.7965 49.0317 11.525C49.5113 12.2535 50.1929 12.8212 50.9904 13.1565C51.7879 13.4918 52.6654 13.5795 53.512 13.4086C54.3586 13.2377 55.1363 12.8158 55.7467 12.1963C56.3571 11.5768 56.7727 10.7875 56.9411 9.92817C57.1095 9.06888 57.0231 8.17821 56.6928 7.36878C56.3624 6.55935 55.803 5.86751 55.0853 5.38077C54.3676 4.89402 53.5238 4.63422 52.6606 4.63422C51.5034 4.63539 50.394 5.10247 49.5758 5.93296C48.7575 6.76344 48.2973 7.88948 48.2962 9.06397Z"
        fill="white"
      />
      <path
        d="M30.8386 33.4269V26.7825C30.8368 25.0208 30.1465 23.3318 28.9192 22.0861C27.6918 20.8404 26.0277 20.1398 24.2919 20.1381H11.1987C9.463 20.1398 7.79885 20.8404 6.5715 22.0861C5.34414 23.3318 4.65386 25.0208 4.65212 26.7825V33.4269H0.28772V37.8566H35.203V33.4269H30.8386ZM9.01653 26.7825C9.01653 26.1951 9.24644 25.6318 9.65568 25.2164C10.0649 24.801 10.62 24.5677 11.1987 24.5677H24.2919C24.8707 24.5677 25.4258 24.801 25.835 25.2164C26.2442 25.6318 26.4741 26.1951 26.4741 26.7825V33.4269H9.01653V26.7825Z"
        fill="white"
      />
      <path
        d="M9.0166 9.06397C9.0166 7.31172 9.52854 5.59883 10.4877 4.1419C11.4468 2.68496 12.8101 1.54941 14.405 0.878861C16 0.208306 17.7551 0.0328589 19.4483 0.374704C21.1416 0.71655 22.6969 1.56034 23.9176 2.79936C25.1384 4.03838 25.9697 5.61699 26.3065 7.33557C26.6433 9.05414 26.4705 10.8355 25.8098 12.4543C25.1491 14.0732 24.0303 15.4569 22.5949 16.4304C21.1594 17.4039 19.4718 17.9235 17.7454 17.9235C15.4311 17.9211 13.2122 16.987 11.5758 15.326C9.9393 13.665 9.01891 11.4129 9.0166 9.06397ZM13.381 9.06397C13.381 9.94009 13.637 10.7965 14.1165 11.525C14.5961 12.2535 15.2777 12.8212 16.0752 13.1565C16.8727 13.4918 17.7503 13.5795 18.5969 13.4086C19.4435 13.2377 20.2211 12.8158 20.8315 12.1963C21.4419 11.5768 21.8576 10.7875 22.026 9.92817C22.1944 9.06888 22.1079 8.17821 21.7776 7.36878C21.4473 6.55935 20.8879 5.86751 20.1702 5.38077C19.4524 4.89402 18.6086 4.63422 17.7454 4.63422C16.5883 4.63539 15.4788 5.10247 14.6606 5.93296C13.8424 6.76344 13.3822 7.88948 13.381 9.06397Z"
        fill="white"
      />
    </svg>
  );
};

export const LongArrowIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={mergeClsx(className, "w-6 h-6")}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

export default async function SliderType2() {
  return (
    <div className={`bg-black mb-[220px]`}>
      <Container className="py-7">
        <h3 className="max-w-[740px] mb-7 text-center font-semibold mx-auto text-white">
          Why choose Us?
        </h3>
        <div className="mb-1 text-center">
          <span className="text-[#EFEFEF]">
            our services have been trusted by world travelers.
          </span>
        </div>
        <div className={`relative mx-auto -mb-[220px] gap-x-8 gap-y-10 pb-5`}>
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
            idBlock="SliderType2"
            autoHeight
            customContainerOnlySliderCls="px-28"
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
                  className="flex flex-col gap-8 pb-16 pl-5 pr-16 bg-white rounded-md shadow-lg pt-11"
                >
                  <div className="h-[95px] w-[95px] aspect-square flex items-center justify-center bg-black rounded-[10px]">
                    <SampleIcon />
                  </div>
                  <span className="text-2xl font-semibold">Best Service</span>
                  <span className="text-[#858585] text-lg">
                    our service is reliable and convenient, our service is
                    quality.
                  </span>
                  <Link
                    href={"/"}
                    className="flex items-center gap-2 font-medium group"
                  >
                    Learn more{" "}
                    <LongArrowIcon className="transition-all group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
}
