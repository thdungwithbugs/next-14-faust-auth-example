import { mergeClsx } from "@/helpers";
import React from "react";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
  noPaddingRight?: boolean;
}

const Container = ({
  children,
  className,
  noPaddingRight,
}: IContainerProps) => {
  return (
    <section
      className={mergeClsx(
        "xl:max-w-[70%] lg:max-w-[80%] w-[90%] mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
