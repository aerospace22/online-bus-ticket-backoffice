import React from "react";
import BRAND_LOGO from "@/assets/brand-logo.jpeg";

type Props = {
  children: React.ReactNode;
};

export const AuthLayout: React.FC<Props> = (props) => {
  return (
    <div className="h-screen w-screen flex flex-col gap-8 items-center bg-white relative pt-[6%]">
      <img src={BRAND_LOGO} alt="brand-logo.jpeg" className="w-[100px] h-[100px]" />
      <div className="w-[450px]" style={{ zoom: 0.85 }}>
        {props.children}
      </div>

      <p className="text-xs text-gray-700 absolute bottom-3 left-3">App Version v1.0.0.1 (beta)</p>
    </div>
  );
};
