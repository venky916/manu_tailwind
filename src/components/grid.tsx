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
            <div className="h-full w-full"></div>
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
        "[background-image:radial-gradient(black_1px,_transparent_1px)] [background-size:10px_10px]",
        // "bg-[radial-gradient(var(--color-neutral-200)_1px,_transparent_1px)] bg-[size:10px_10px]",
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
