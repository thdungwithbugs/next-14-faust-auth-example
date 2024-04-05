import React from "react";
import Container from "../_components/ui/Container";
import Image from "next/image";

export default async function GridSection() {
  return (
    <Container className="py-[118px]">
      <h3 className="max-w-[740px] mb-7 text-center font-semibold mx-auto text-[#020202]">
        Our tour partner
      </h3>
      <div className="mb-16 text-center max-w-[630px] mx-auto">
        <span className="text-[#858585]">
          There are many variation of passage of lorem ipsum available but the
          majority have suffered alteration
        </span>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 xl:grid-cols-5 md:gap-12 xl:gap-20">
        {[0, 1, 2, 3, 4].map((item, index) => (
          <Image
            src={"/images/Katana.png"}
            key={index}
            alt="logo"
            height={44}
            width={150}
            priority
            // quality={0.9}
            className="object-contain object-center w-auto h-11"
          />
        ))}
      </div>
    </Container>
  );
}
