import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto h-screen w-full max-w-7xl pt-20 pb-10">
      <Header />

      <div className="mt-10 grid grid-cols-1 gap-2 rounded-3xl border border-neutral-300 mask-b-from-50% p-1 md:grid-cols-2 lg:grid-cols-4">
        <Column>
          <Card
            src="/images/image.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
            className="rounded-tl-[calc(24px-4px)]"
          />
          <Card
            src="/images/1.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
          />
          <Card
            src="/images/2.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
          />
          <Card
            src="/images/3.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
          />
        </Column>
        <Column>
          <Card
            src="/images/1.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
          />
          <Card
            src="/images/image.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
          />
          <Card
            src="/images/2.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
          />
          <Card
            src="/images/2.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
          />
        </Column>
        <Column>
          <Card
            src="/images/2.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
          />
          <Card
            src="/images/image.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
          />
          <Card
            src="/images/1.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
          />
          <Card
            src="/images/1.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
          />
        </Column>
        <Column>
          <Card
            src="/images/3.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
            className="rounded-tr-[calc(24px-4px)]"
          />
          <Card
            src="/images/2.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
          />
          <Card
            src="/images/1.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
          />

          <Card
            src="/images/image.png"
            alt="Posthog"
            href="https://ui.aceternity.com/"
          />
        </Column>
      </div>
    </div>
  );
}
const Card = ({
  src,
  alt,
  className,
  href,
}: {
  src: string;
  alt: string;
  className?: string;
  href: string;
}) => {
  return (
    // <Link href={href} target="_blank" className="card group">
    //   <Image
    //     src={src}
    //     alt={alt}
    //     height={500}
    //     width={500}
    //     className={cn(className, "group-hover:opacity-55 group-hover:scale-105")}
    //   />
    // </Link>

    // <Link href={href} target="_blank" className="card after:content-[''] after:absolute after:bg-black after:opacity-0 after:w-full after:h-full after:inset-0 hover:after:opacity-50 after:transition-all after:duration-200">
    <Link
      href={href}
      target="_blank"
      className={cn("card overlay group rounded-md", className)}
    >
      <Image src={src} alt={alt} height={500} width={500} />
      <p className="absolute inset-0 z-20 m-auto flex items-center justify-center text-sm font-medium text-white opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-200">
        {href.split("https://")[1]}
      </p>
    </Link>
  );
};
const Column = ({ children }: { children: React.ReactNode }) => {
  return <div className="">{children}</div>;
};

const Header = () => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter text-neutral-700">
        Bento grids are cool, you should try it sometimes.
      </h1>
      <p className="mt-4 max-w-xl text-base text-neutral-500">
        Discover innovative solutions that transform the way you work and
        create. Our cutting-edge tools are designed to empower your creativity
        and boost your productivity like never before.
      </p>
    </>
  );
};
