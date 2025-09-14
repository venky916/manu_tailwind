import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const Practice = () => {
  return (
    <div className="relative grid min-h-screen grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10">
      <div className="col-start-3 row-start-3 flex max-w-lg flex-col bg-gray-100 p-2 dark:bg-white/10">
        <div className="rounded-xl bg-white p-10 text-sm/7 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          <Image
            src="logo.svg"
            className="mb-11.5 h-6 dark:hidden"
            alt="Tailwind Play"
            width={100}
            height={100}
          />
          <Image
            src="logo-dark.svg"
            className="mb-11.5 h-6 not-dark:hidden"
            alt="Tailwind Play"
            width={200}
            height={200}
          />
          <div className="space-y-6">
            <p>
              An advanced online playground for Tailwind CSS, including support
              for things like:
            </p>
            <ul className="space-y-3">
              <li className="flex">
                <svg
                  className="h-[1lh] w-5.5 shrink-0"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke-linecap="square"
                >
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    className="stroke-sky-400/25"
                  />
                  <path
                    d="M8 11.5L10.5 14L14 8"
                    className="stroke-sky-800 dark:stroke-sky-300"
                  />
                </svg>
                <p className="ml-3">
                  Customizing your theme with
                  <code className="font-mono font-medium text-gray-950 dark:text-white">
                    @theme
                  </code>
                </p>
              </li>
              <li className="flex">
                <svg
                  className="h-[1lh] w-5.5 shrink-0"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke-linecap="square"
                >
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    className="stroke-sky-400/25"
                  />
                  <path
                    d="M8 11.5L10.5 14L14 8"
                    className="stroke-sky-800 dark:stroke-sky-300"
                  />
                </svg>
                <p className="ml-3">
                  Adding custom utilities with
                  <code className="font-mono font-medium text-gray-950 dark:text-white">
                    @utility
                  </code>
                </p>
              </li>
              <li className="flex">
                <svg
                  className="h-[1lh] w-5.5 shrink-0"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke-linecap="square"
                >
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    className="stroke-sky-400/25"
                  />
                  <path
                    d="M8 11.5L10.5 14L14 8"
                    className="stroke-sky-800 dark:stroke-sky-300"
                  />
                </svg>
                <p className="ml-3">
                  Adding custom variants with
                  <code className="font-mono font-medium text-gray-950 dark:text-white">
                    @variant
                  </code>
                </p>
              </li>
              <li className="flex">
                <svg
                  className="h-[1lh] w-5.5 shrink-0"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke-linecap="square"
                >
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    className="stroke-sky-400/25"
                  />
                  <path
                    d="M8 11.5L10.5 14L14 8"
                    className="stroke-sky-800 dark:stroke-sky-300"
                  />
                </svg>
                <p className="ml-3">Code completion with instant preview</p>
              </li>
            </ul>
            <p>
              Perfect for learning how the framework works, prototyping a new
              idea, or creating a demo to share online.
            </p>
          </div>
          <hr className="my-6 w-full border-(--pattern-fg)" />
          <p className="mb-3">Want to dig deeper into Tailwind?</p>
          <p className="font-semibold">
            <a
              href="https://tailwindcss.com/docs"
              className="text-gray-950 underline decoration-sky-400 underline-offset-3 hover:decoration-2 dark:text-white"
            >
              Read the docs &rarr;
            </a>
          </p>
        </div>
      </div>
      <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)"></div>
      <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)"></div>
    </div>
  );
};

export const Gradient = () => {
  return (
    <div className="h-72 bg-[radial-gradient(circle_at_center,_#9333ea_0%,_#db2777_50%,_#2563eb_100%)]"></div>
  );
};

export const Gradient1 = () => {
  return (
    // <div
    //   className={cn(
    //     "my-4 h-60 w-full overflow-hidden rounded-lg bg-gray-50 bg-center bg-repeat-round",
    //     // "bg-[radial-gradient(var(--color-black)_1px,_transparent_1px)]",
    //     // "[background-size:10px_10px]",
    //     // "mask-radial-from-40%",
    //     // "bg-[repeating-linear-gradient(45deg,_#000_0,_#000_1px,_transparent_0,_transparent_10px)]",
    //     // "[background-size:10px_10px] bg-fixed",
    //     // "bg-[radial-gradient(#000_100px,_transparent_2px)] bg-top-right ",

    //     // "bg-[conic-gradient(#000_90deg,_transparent_90deg_180deg,_#000_180deg_270deg,_transparent_270deg)] [background-size:20px_20px]",
    //     // "bg-[repeating-linear-gradient(45deg,_#000_0,_#000_1px,_transparent_0,_transparent_10px)] ",
    //   )}
    // ></div>
    <div className="relative h-32 bg-[radial-gradient(#3b82f6_1px,_transparent_1px)] [background-size:15px_15px] bg-center">
      {" "}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>{" "}
      <div className="relative z-10 p-6">Content</div>{" "}
    </div>
  );
};

export const Gradient2 = () => {
  return (
    <div className="relative flex h-72 w-full items-center justify-center bg-[conic-gradient(#9233ea,#db2777,#2564eb)]">
      {/* <div className="h-52 w-full bg-[conic-gradient(var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600"></div> */}
    </div>
  );
};
