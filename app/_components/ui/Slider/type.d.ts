import { PaginationOptions, SwiperOptions } from "swiper/types";

interface ISliderProps extends SwiperOptions {
  isFallback?: boolean;
  children?: React.ReactNode;
  onInit?: any;
  bordered?: boolean;
  beTabs?: boolean;
  className?: string;
  withArrowBackground?: boolean;
  sliderFluid?: boolean;
  paginationOutside?: boolean;
  slideNavigationBottom?: boolean;
  disableArrows?: boolean;
  idBlock?: string;
  swiperSlideClass?: string;
  clickable?: boolean;
  bonusHeight?: number | string;
  navigation?: SwiperOptions["navigation"];
  rewind?: boolean;
  maxLengthElement?: number;
  dataLength?: number;
  customNavigation?: boolean;
  customContainerOnlySliderCls?: string;
  customTopNavigationCls?: string;
  effectCoverflow?: boolean;
  data?: {
    thumbnail: string;
    id: number | string;
    detailStory: {
      media?: string;
      publicTime?: string;
    }[];
  }[];
  onActiveIndexChange?: ((swiper: Swiper) => void) | undefined;
  paginationType?: PaginationOptions["type"] | "range" | "dots-line";
  arrowBtnClassName?: string;
  layout?: string | number;
  customTopNavigation?: boolean;
}

interface ISliderStoryProps extends SwiperOptions {
  isFallback?: boolean;
  children?: React.ReactNode;
  onInit?: any;
  bordered?: boolean;
  beTabs?: boolean;
  className?: string;
  withArrowBackground?: Boolean;
  sliderFluid?: Boolean;
  paginationOutside?: boolean;
  disableArrows?: boolean;
  swiperSlideClass?: string;
  swiperSlideThumbnailClass?: string;
  clickable?: boolean;
  bonusHeight?: number | string;
  navigation?: SwiperOptions["navigation"];
  rewind?: boolean;
  maxLengthElement?: number;
  dataLength?: number;
  data: {
    thumbnail: string;
    id: number | string;
    name: string;
    detailStory: {
      media?: string;
      publicTime?: string;
    }[];
  }[];
  isSlideToOtherStory: boolean;
}
