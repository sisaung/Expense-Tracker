import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="w-[1000px] mx-auto "> {children} </div>;
};

export default Container;
