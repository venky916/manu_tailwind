import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
// neo-brutalism same as gumroad shadow buttons "shadow-[4px_4px_0px_0px_var(--color-black)]",

export const Component = () => {
  return (
    <div
      className={cn(
        "min-h-100 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-900",
        "bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)] bg-[size:10px_10px] bg-fixed",
        "bg-[size:10px_10px] bg-fixed dark:bg-[radial-gradient(var(--color-neutral-800)_1px,transparent_1px)]",
        "group flex flex-col items-center justify-center gap-4 p-8",
      )}
    >
      <h2
        className={cn(
          "text-2xl font-bold tracking-tight",
          //   "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent ",
          "text-neutral-800 text-shadow-neutral-300 text-shadow-sm dark:text-neutral-100 dark:text-shadow-neutral-600",
        )}
      >
        Easily Modified Scale with Tailwind
      </h2>
      <p className="mx-auto max-w-sm bg-gradient-to-b from-neutral-700 to-neutral-300 bg-clip-text text-center text-base text-transparent dark:from-neutral-100 dark:to-neutral-600">
        No need to remember that complicated gradient syntax create silky-smooth
        gradients with just a few utility classes.
      </p>
      <div
        className={cn(
          "size-60 rounded-2xl border border-neutral-200 bg-neutral-100 transition-all duration-200 group-hover:border-neutral-300 group-hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-600 dark:group-hover:border-neutral-800 dark:group-hover:bg-neutral-700",
          "bg-[radial-gradient(var(--color-gray-400)_1px,transparent_1px)] bg-[size:10px_10px]",
          "bg-[size:10px_10px] dark:bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)]",
          "relative shadow-2xl",
          "perspective-distant transform-3d",
        )}
      >
        <Image
          //   src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
          className={cn(
            "h-full w-full rounded-2xl object-cover",
            "translate-z-30 rotate-x-30 -rotate-y-20 rotate-z-20 transform",
            "transition-transform duration-300 [transition-timing-function:cubic-bezier(.4,0,.2,1)]",
            "group-hover:scale-85 group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0",
          )}
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};
