let blurb =
  "A CSA (consumer supported agriculture) is like one of your favorite food subscription boxes, but instead it supports local food and people. In exchange, you bring a bag and we pack it full of in-season, customized produce, meat, eggs, and dairy, every Tuesday from the end of March to the end of November, for a flat fee.";
export default function CTA() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-darkblue p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Our membership program
              </h2>

              <p className="hidden text-white/90 sm:mt-4 sm:block">{blurb}</p>

              <div className="mt-4 md:mt-8">
                <a
                  href="/csa"
                  className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-twilight transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-babyblue"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="veggies"
              src="/moreveggies.jpg"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <img
              alt="Student"
              src="/eggs.jpg"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
