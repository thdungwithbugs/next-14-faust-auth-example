import React from "react";
import Container from "../_components/ui/Container";
import Image from "next/image";
import Button from "../_components/ui/Button";

import { getImageUrl } from "../_common/utils/GetImageUrl";
import HtmlParser from "../_common/HtmlParser";
import { DownSvg } from "./Headermenu";

const HeroBanner = (data: any) => {
  return (
    <section className="hero-banner">
      <div className="w-auto h-[calc(480px_+_70px)] md:h-[calc(720px_+_70px)] object-contain items-end isolate relative">
        <Image
          priority={true}
          src={getImageUrl(data?.imageBackground)}
          alt="hero background"
          className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
          quality={90}
          width={1920}
          height={720}
        />
        <Container className="flex items-end h-full gap-4">
          <div className="flex-1 pb-16 md:pb-[113px] flex flex-col gap-8 text-white">
            <h3 className="spec-dom">
              <HtmlParser data={data?.title} />
            </h3>
            <span className="text-[#CFCFCF]">
              <HtmlParser data={data?.content} />
            </span>

            <div className="grid items-center grid-cols-4 p-2 pl-6 text-lg bg-white rounded-full shadow-2xl w-max text-[#9B9B9B] font-semibold">
              <div className="flex items-center gap-2">
                Location <DownSvg className="text-[#9B9B9B] h-2 w-auto" />
              </div>
              <div className="flex items-center gap-2">
                Date <DownSvg className="text-[#9B9B9B] h-2 w-auto" />
              </div>

              <div className="flex items-center gap-2">
                People <DownSvg className="text-[#9B9B9B] h-2 w-auto" />
              </div>

              <Button className="text-white bg-black">Explore now</Button>
            </div>
            <span className="text-[#CFCFCF]">
              <HtmlParser data={data?.note} />
            </span>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroBanner;
