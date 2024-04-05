"use client";

import React, { Fragment, useRef, useState } from "react";
import Button from "../_components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import Container from "../_components/ui/Container";
import { mergeClsx } from "@/helpers";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Popover, Transition } from "@headlessui/react";

export const SearchSvg = ({ className }: { className?: string }) => {
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
        d="M18.8651 21L11.7134 13.8503C10.1518 14.8804 8.26345 15.2944 6.41407 15.0121C4.56469 14.7299 2.88585 13.7715 1.70265 12.3224C0.51946 10.8734 -0.0839024 9.03693 0.00940887 7.1686C0.10272 5.30026 0.886066 3.53302 2.20775 2.20909C3.53153 0.886998 5.29889 0.103194 7.16752 0.00948759C9.03615 -0.0842188 10.8731 0.51884 12.3225 1.70186C13.7719 2.88488 14.7307 4.56368 15.0131 6.41309C15.2956 8.2625 14.8815 10.1509 13.8513 11.7126L21 18.8653L18.8651 21ZM7.54868 3.01917C6.34704 3.01837 5.1943 3.49493 4.34405 4.34399C3.4938 5.19305 3.01569 6.34508 3.01489 7.54663C3.0141 8.74818 3.49068 9.90084 4.33981 10.751C5.18893 11.6012 6.34103 12.0793 7.54267 12.0801C8.13766 12.0805 8.72691 11.9637 9.27676 11.7364C9.82661 11.5091 10.3263 11.1757 10.7473 10.7553C11.1683 10.3349 11.5024 9.83565 11.7304 9.28614C11.9585 8.73663 12.0761 8.14758 12.0765 7.55263C12.0769 6.95768 11.96 6.36848 11.7327 5.81867C11.5054 5.26886 11.172 4.7692 10.7515 4.34823C10.3311 3.92726 9.83185 3.59322 9.2823 3.36518C8.73275 3.13714 8.14367 3.01956 7.54868 3.01917Z"
        fill="white"
      />
    </svg>
  );
};

export const DownSvg = ({
  className = "text-white",
}: {
  className?: string;
}) => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 10L16 2.02L13.9749 -8.85183e-08L8 5.96L2.02506 -6.10864e-07L-8.8297e-08 2.02L8 10Z"
        fill="currentColor"
        fillOpacity="0.8"
      />
    </svg>
  );
};

export const LogoSvg = ({ className }: { className?: string }) => {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.58796 17.4928L8.83573 17.8942L9.25089 17.6702L13.752 15.2413L14.2184 14.9896L13.94 14.5386L11.8984 11.2318H33.7349L22.8204 28.9261L20.7335 25.5399L20.4855 25.1376L20.0698 25.3625L15.5688 27.7985L15.1033 28.0505L15.3813 28.5009L22.3948 39.8642L22.8203 40.5537L23.2458 39.8641L44.0584 6.12948L44.5288 5.36694H43.6329H2H1.10383L1.57452 6.12955L8.58796 17.4928Z"
        fill="#069ABA"
        stroke="#069ABA"
      />
    </svg>
  );
};

export const LogoGroup = () => {
  return (
    <div className="flex items-center gap-2">
      <LogoSvg />
      <span className="text-4xl font-bold text-white">Traveller</span>
    </div>
  );
};

const HeaderMenu = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  const bufferRef = useRef<null | HTMLDivElement>(null);

  useIntersectionObserver({
    callback: (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setIsTransparent(false);
        } else {
          setIsTransparent(true);
        }
      });
    },
    options: {
      root: null,
      threshold: 1,
    },
    targets: [bufferRef],
  });

  return (
    <>
      <header
        className={mergeClsx(
          "bg-black w-full fixed z-10 top-0 left-1/2 -translate-x-1/2 duration-700 ease-out transition-all",
          isTransparent ? "w-full" : "md:w-[80%] md:rounded-lg shadow-md"
        )}
      >
        <Container>
          <nav
            className="flex items-center justify-between py-[calc((96px-57px)/2)] "
            aria-label="Global"
          >
            <div className="flex">
              <Link href="/" className="-m-1.5 p-1.5">
                <LogoGroup />
              </Link>
            </div>
            <div className="flex items-center justify-end flex-1 gap-3 font-medium md:gap-14">
              <Popover.Group className="hidden lg:flex lg:gap-x-12">
                <Popover className="relative">
                  <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-white outline-none gap-x-2">
                    Product
                    <DownSvg className="flex-none" />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
                      <div className="p-4">Something child of Product</div>
                    </Popover.Panel>
                  </Transition>
                </Popover>

                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Company
                </a>
              </Popover.Group>
              <SearchSvg />
            </div>
          </nav>
        </Container>
      </header>
      <div
        aria-hidden
        ref={bufferRef}
        className={mergeClsx("h-0", "hidden md:block w-full")}
      />
    </>
  );
};

export default HeaderMenu;
