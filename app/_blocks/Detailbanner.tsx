import Image from "next/image";
import React from "react";
import Container from "../_components/ui/Container";

const HumanIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.75 21C1.75 21 0 21 0 19.25C0 17.5 1.75 12.25 10.5 12.25C19.25 12.25 21 17.5 21 19.25C21 21 19.25 21 19.25 21H1.75ZM10.5 10.5C11.8924 10.5 13.2277 9.94688 14.2123 8.96231C15.1969 7.97774 15.75 6.64239 15.75 5.25C15.75 3.85761 15.1969 2.52226 14.2123 1.53769C13.2277 0.553124 11.8924 0 10.5 0C9.10761 0 7.77226 0.553124 6.78769 1.53769C5.80312 2.52226 5.25 3.85761 5.25 5.25C5.25 6.64239 5.80312 7.97774 6.78769 8.96231C7.77226 9.94688 9.10761 10.5 10.5 10.5Z"
        fill="#F8F8F8"
      />
    </svg>
  );
};

const DetailBanner = () => {
  return (
    <section className="hero-banner">
      <div className="w-auto h-[calc(480px_+_70px)] md:h-[calc(720px_+_70px)] object-contain items-end isolate relative">
        <Image
          priority={true}
          src={
            "https://images.unsplash.com/photo-1711968267709-12c4f6a8ddc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="hero background"
          className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
          quality={90}
          width={1920}
          height={720}
        />
        <Container className="flex items-end h-full gap-4">
          <div className="flex-1 pb-16 md:pb-[347px] flex flex-col gap-8 text-white max-w-[690px] mx-auto text-center">
            <h3 className="spec-dom">
              Travel Stories For Now <br /> and the Future
            </h3>
            <div className="grid grid-cols-1 gap-16 md:grid-cols-3 max-w-[676px] mx-auto">
              {[0, 1, 2].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <HumanIcon />
                  <span className="text-2xl text-white">Hasmar</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default DetailBanner;
