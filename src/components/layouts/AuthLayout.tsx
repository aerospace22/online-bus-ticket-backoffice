import React from "react";

type Props = {
  children: React.ReactNode;
};

export const AuthLayout: React.FC<Props> = (props) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-950 relative">
      <div className="w-[450px]" style={{ zoom: 0.85 }}>
        {props.children}
      </div>

      <p className="text-xs text-gray-200 absolute bottom-3 left-3">App Version v1.0.0.1 (beta)</p>
    </div>
  );
};
