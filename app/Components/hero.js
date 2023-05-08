export default function Hero() {
  return (
    <section className="bg-gray-100 text-gray-800 bg-[url('/cows.jpg')] bg-cover">
      <div className=" container flex flex-col items-start px-4 py-16 text-left md:py-32 md:px-10 lg:px-30 xl:max-w-3xl bg-slate-800/50  ">
        <h1 className="text-4xl text-white font-bold leading-none sm:text-5xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] ">
          Want farm fresh, community harvested, organic food?
          <span className="text-babyblue">Look no further.</span>
        </h1>
        <p className=" mt-8 mb-5 text-lg text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          We're a historic farm dedicated to teaching, learning, and helping our
          community thrive.
        </p>
        <div className="flex flex-wrap justify-end">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-babyblue text-white">
            Our Calendar
          </button>
          <button className="px-8 py-3 m-2 text-lg border text-white rounded bg-darkblue text-gray-900 border-babyblue">
            Shop Online
          </button>
        </div>
      </div>
    </section>
  );
}
