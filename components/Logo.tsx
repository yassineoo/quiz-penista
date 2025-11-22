import React from "react";

export const Logo: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img src={"./logo.png"} alt="Logo" className="object-contain h-12 w-28" />
      <h1 className="text-2xl font-bold tracking-widest text-white mt-2 uppercase">Penista</h1>
    </div>
  );
};
