import React from "react";
import Container from "../_components/ui/Container";
import Button from "../_components/ui/Button";

export default async function SubcribeSection() {
  return (
    <div className="bg-black">
      <Container className="pt-16 pb-[157px]">
        <h3 className="max-w-[740px] mb-7 text-center font-semibold mx-auto text-white">
          Subcribe to get special price
        </h3>
        <div className="mb-[88px] text-center max-w-[630px] mx-auto">
          <span className="text-[#878787]">
            Dont wanna miss something? subscribe right now and get special
            promotion and monthly newsletter
          </span>
        </div>
        <div className="relative flex h-16 w-full min-w-[200px] max-w-[676px] mx-auto">
          <Button
            className="!absolute right-1.5 top-2 z-10 select-none py-4 px-6 bg-black text-center align-middle text-xs font-bold text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none rounded-full"
            htmlType="submit"
            data-ripple-light="true"
          >
            Subscribe
          </Button>
          <input
            className="peer h-full w-full bg-white px-3 py-2.5 pr-[180px] sm:pl-12 font-sans text-sm font-normal border-transparent text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] relative"
            placeholder="Type your email here"
          />
        </div>
      </Container>
    </div>
  );
}
