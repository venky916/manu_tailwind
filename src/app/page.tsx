import { Gradient, Gradient1, Gradient2 } from "@/components/practice";

export default function Home() {
  return (
    <div className="mx-auto flex h-screen max-w-5xl flex-col space-y-3 p-3">
      <Gradient />
      <Gradient1 />
      <Gradient2 />
    </div>
  );
}
