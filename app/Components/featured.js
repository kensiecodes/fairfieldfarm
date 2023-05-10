export default function Featured() {
  return (
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center">
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
            What's in season
          </h2>

          <p class="max-w-md mx-auto mt-4 text-gray-500">
            We like offering fresh food and organic goods all year long. Here's
            what we have in our harvest baskets this week.
          </p>
        </header>

        <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <a href="#" class="relative block group">
              <img
                src="/cow.jpg"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Fresh Dairy</h3>

                <span class="mt-1.5 inline-block bg-darkblue px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Call
                </span>
              </div>
            </a>
          </li>

          <li>
            <a href="#" class="relative block group">
              <img
                src="/beeswax.jpg"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Beeswax Salve</h3>

                <span class="mt-1.5 inline-block bg-darkblue px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Enter the waitlist
                </span>
              </div>
            </a>
          </li>

          <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" class="relative block group">
              <img
                src="/veggies.jpg"
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">
                  Frost-Hardy Veggies
                </h3>

                <span class="mt-1.5 inline-block bg-darkblue px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
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
