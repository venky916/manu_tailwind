import React from "react";

export const Responsive = () => {
  return (
    <div className="flex flex-col paaji:flex-row items-center justify-center gap-4">
      <div className="h-40 w-40 rounded-2xl bg-neutral-200"></div>
      <div className="h-40 w-40 rounded-2xl bg-red-200"></div>
      <div className="h-40 w-40 rounded-2xl bg-blue-200"></div>
    </div>
  );
};
