export default function Profile() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="farming.jpg"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-40 h-40 rounded-full inline-flex items-center justify-center text-gray-400">
                <img
                  src="seraphine.jpg"
                  className="h-full w-auto overflow-hidden object-cover"
                ></img>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Seraphine Smith
                </h2>
                <div className="w-12 h-1 bg-burntorange rounded mt-2 mb-4"></div>
                <p className="text-base">
                  An environmental scientist and community leader. Loves
                  chickens and bicycling, but not necessarily together.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Seraphine is our irrigation and soil expert. She is interested
                in a sustainable, organic farming practice that yields plentiful
                and healthful food. Seraphine offers 1-on-1s, free kids
                classNamees every first saturday of each month of the growing
                season, and of course, tons and tons of veggies at the stand. In
                her off-time, she is cooking, reading, or bicycling.
              </p>
              <a className="text-darkblue inline-flex items-center">
                Twitter
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-10 bg-twilight bg-opacity-20 p-3 px-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-40 h-40 rounded-full inline-flex items-center justify-center text-gray-400">
                <img
                  src="faith.jpg"
                  className="h-full w-auto overflow-hidden object-cover"
                ></img>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Faith George
                </h2>
                <div className="w-12 h-1 bg-burntorange rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Current farmer and professor at SVCC. Enjoys teaching kids
                  about nature, watching plants grow, and gaming.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Faith is a loud and proud "horse girl" and animal lover. We took
                her onto our team in 2015 to direct our animal agriculture in an
                intentional, ethical way. She runs our nonprofit animal rescue,
                Free, and manages our free range chicken coops and Angora goat
                mohair harvesting. In her off time, she is knitting and watching
                cooking shows, guaranteed.
              </p>
              <a className="text-darkblue inline-flex items-center">
                Twitter
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center  sm:py-8">
              <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  src="josh.jpeg"
                  className=" overflow-hidden object-cover"
                ></img>
              </div>
              <div className="mr-8 flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Josh Smith
                </h2>
                <div className="w-12 h-1 bg-burntorange rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Our resident heirloom specialist. This guy knows too much
                  about tomatoes. Seriously.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Josh took an interest in botany in middle school, which
                translated into experimentation with breeding and splicing
                plants. Now, Josh grows as many tomato and other veggie
                varieties as possible, and is one of the state's most prolific
                heirloom experts. If you've purchased seeds from our farm, Josh
                is probably the one who chose the fruit or flower. Josh also
                offers classNamees and 1-on-1 trainings on vegetable genetics
                and breeding.
              </p>
              <a className="text-darkblue inline-flex items-center">
                Twitter
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
