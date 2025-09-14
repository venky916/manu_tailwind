"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BrainIcon } from "./icons";

/* no spaces or ,; in arbitary values ok instead use the _ */
// both [height-40px] and h-[40px] work are same px rem em vh vw etc
// but no spaces or ,; in arbitary values ok instead use the _
// h-[40px] w-[40px] [background-color:green] bg-gray-200 shadow-[0px_4px_8px_12px_rgba(0,0,0,0.1)]
// shadow-[0px_4px_8px_12px_var(--color-red-500)]
// [box-shadow:0_2px_4px_8px_rgba(0,0,0,0.1)]

const MainSkeleton = () => {
  const chats = [
    {
      role: "user",
      text: "hello there",
    },
    {
      role: "assistant",
      text: "hello there, how can I help you?",
    },
    {
      role: "user",
      text: "what is react?",
    },
    {
      role: "assistant",
      text: "React is a JavaScript library for building user interfaces.",
    },
    {
      role: "user",
      text: "oh nice, can I use it with TypeScript?",
    },
    {
      role: "assistant",
      text: "Yes, React works very well with TypeScript for type safety and better tooling.",
    },
    {
      role: "user",
      text: "thanks for the info!",
    },
    {
      role: "assistant",
      text: "You're welcome! Do you want me to share some resources?",
    },
  ];

  const UserMessage = ({ text }: { text: string }) => {
    return (
      <div className="ml-auto flex w-fit items-start justify-end gap-2 rounded-t-full rounded-br-lg rounded-bl-full bg-blue-500 p-2">
        <p className="text-sm text-white">{text}</p>
        <div className="size-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      </div>
    );
  };

  const AIMessage = ({ text }: { text: string }) => {
    return (
      <div className="mr-auto flex w-fit items-start justify-start gap-2 rounded-t-full rounded-br-full rounded-bl-lg bg-gray-100 p-2">
        <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
        <p className="text-sm text-gray-800">{text}</p>
      </div>
    );
  };

  return (
    <div className="relative z-20 flex h-full w-full flex-col gap-4 px-12">
      <input
        type="text"
        className="absolute inset-x-0 -bottom-px mx-auto w-[calc(100%-5rem)] rounded-md border border-neutral-200 bg-white p-1"
        placeholder="type a message"
      />
      {chats.map((chat, index) => {
        if (chat.role === "user") {
          return <UserMessage key={index} text={chat.text} />;
        } else {
          return <AIMessage key={index} text={chat.text} />;
        }
      })}
    </div>
  );
};

export const Grid = () => {
  return (
    <div className="mx-auto mt-4 min-h-screen max-w-5xl border-x border-neutral-200 bg-gray-50 dark:border-neutral-700">
      <div className="grid-col-1 grid divide-x divide-y divide-neutral-200 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <BrainIcon />
            <CardTitle>LLm Model Selector</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full"></div>
          </CardSkeleton>
        </Card>
        <Card>
          <CardHeader>
            <BrainIcon />
            <CardTitle>LLm Model Selector</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <MainSkeleton />
          </CardSkeleton>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <BrainIcon />
            <CardTitle>LLm Model Selector</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full"></div>
          </CardSkeleton>
        </Card>
      </div>
    </div>
  );
};
const CardSkeleton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      // can u give background shimmer effect one which u gave early copilot?
      // style={{
      //   backgroundImage: "radial-gradient(black 1px, transparent 1px)",
      //   backgroundSize: "10px 10px",
      // }}

      className={cn(
        "my-4 h-60 w-full overflow-hidden rounded-md bg-gray-50 p-2",
        // Dot Pattern
        // "[background-image:radial-gradient(black_1px,_transparent_1px)] [background-size:10px_10px]",
        "bg-[radial-gradient(var(--color-neutral-200)_1px,_transparent_1px)] bg-[size:10px_10px]",

        // mask effect
        // "[mask-image:radial-gradient(circle_at_center,white,transparent)]",
        "mask-radial-from-40%",
        className,
      )}
    >
      {children}
    </div>
  );
};
const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("bg-white p-4 text-black", className)}>{children}</div>
  );
};

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-lg font-medium tracking-tight">{children}</h2>;
};

const CardDescription = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-base text-neutral-400", className)}>{children}</p>
  );
};
