import { cn } from "@/lib/utils";
import React from "react";

export const Form = () => {
  return (
    <form className="h-full w-full bg-gray-50 px-8 py-14">
      <h1
        className={cn(
          "text-center text-4xl font-bold tracking-tighter",
          "bg-gradient-to-b from-neutral-800 to-neutral-700 bg-clip-text text-transparent",
          "selection:bg-black selection:text-white",
        )}
      >
        This is{" "}
        <span
          className={cn(
            "relative z-10 inline-block text-white",
            "after:absolute after:inset-0 after:-z-10 after:-skew-2 after:bg-red-500 after:content-['']",
          )}
        >
          Crazy
        </span>{" "}
        Form
      </h1>
      <div className="mx-auto my-4 flex max-w-sm flex-col gap-8">
        <Group>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            required
            className="required:border-red-500"
          />
        </Group>
        <Group>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="invalid:border-red-500 invalid:shadow-none"
          />
        </Group>
        <Group className="">
          <Label htmlFor="company">Company</Label>
          <Input
            type="text"
            name="company"
            placeholder="Enter your company name"
            disabled
            className="disabled:cursor-not-allowed disabled:opacity-50"
          />
        </Group>
        <Group>
          <Label htmlFor="message">Message</Label>
          <Input type="text" name="message" placeholder="Enter your message" />
        </Group>
        <button
          className={cn(
            "cursor-pointer rounded-md bg-black px-4 py-2 text-white",
            "hover:-translate-y-0.5 hover:bg-neutral-800",
            "active:scale-98",
            "relative overflow-hidden transition-all duration-150",
            "after:absolute after:-top-20 after:-left-20 after:z-10 after:h-[400px] after:w-1/2 after:-translate-x-20 after:rotate-10 after:bg-white/20 after:backdrop-blur-[0.5px] after:transition-all after:duration-200 after:content-[''] hover:after:translate-x-[200%]",
          )}
        >
          Send that text
        </button>
      </div>
    </form>
  );
};

const Label = ({
  children,
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className={cn(
        "font-medium text-neutral-700 after:ml-0.5 after:text-red-500 after:content-['*']",
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
};

const Group = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("flex flex-col gap-2 p-2 rounded-md has-[a]:text-lime-500 has-required:bg-yellow-500 has-disabled:bg-red-100 has-invalid:bg-black/50", className)}
    >
      {children}
    </div>
  );
};

const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={cn(
        "shadow-input rounded-lg border border-transparent bg-white px-4 py-2",
        "focus:border-neutral-300 focus:bg-neutral-50 focus:ring-2 focus:ring-neutral-300 focus:ring-offset-1 focus:outline-none",
        "transition-all duration-200 placeholder:text-neutral-300",
        className,
      )}
      {...props}
    />
  );
};

// has-checked we need to add a class to the input checkbox or radio
