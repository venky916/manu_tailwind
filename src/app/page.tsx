export default function Home() {
  return (
    <div className="mx-auto h-screen w-full max-w-7xl pt-20 pb-10">
      <Header />
    </div>
  );
}

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
