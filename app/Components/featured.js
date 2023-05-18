export default function Featured() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-twilight sm:text-3xl">
            What's in season
          </h2>

          <p className="max-w-md mx-auto mt-4 text-gray-500">
            We like offering fresh food and organic goods all year long. Here's
            what we have in our harvest baskets this week.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <a href="#" className="relative block group">
              <img
                src="/cow.jpg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className=" absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="bg-darkblue p-2 bg-opacity-50 text-xl font-medium text-white">
                  Fresh Dairy
                </h3>

                <span className="mt-1.5 inline-block bg-darkblue px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Call
                </span>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="relative block group">
              <img
                src="/beeswax.jpg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className=" bg-darkblue p-2 bg-opacity-50 text-xl font-medium text-white">
                  Beeswax Salve
                </h3>

                <span className="mt-1.5 inline-block bg-darkblue px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Enter the waitlist
                </span>
              </div>
            </a>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" className="relative block group">
              <img
                src="/veggies.jpg"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className=" bg-darkblue p-2 bg-opacity-50 text-xl font-medium text-white">
                  Frost-Hardy Veggies
                </h3>

                <span className="mt-1.5 inline-block bg-darkblue px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
