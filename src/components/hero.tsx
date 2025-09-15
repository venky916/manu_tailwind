import React from "react";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 py-40">
      <h1 className="mx-auto max-w-3xl bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tighter text-transparent">
        Unleash the Power of the intuitive finance
      </h1>
      <p className="mx-auto max-w-3xl text-center text-xl text-neutral-300 selection:bg-gray-800">
        Transform your financial journey with our{" "}
        <span className="text-primary">intelligent platform</span> that
        simplifies complex decisions and empowers you to achieve your financial
        goals with confidence
      </p>
      <div className="mt-8 flex w-full max-w-xl justify-center gap-2">
        <input
          type="text"
          className="flex-1 rounded-xl border border-neutral-600 px-4 text-white transition duration-200 placeholder:text-neutral-400 focus:ring-1 focus:ring-sky-200/50 focus:outline-none"
          placeholder="Enter your email"
        />
        <button className="relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white">
          <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          Join Wait list
        </button>
      </div>
    </div>
  );
};
