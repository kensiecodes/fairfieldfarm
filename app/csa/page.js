import Gallery from "../Components/gallery";
import Pricing from "../Components/pricing";

export default function Csa() {
  return (
    <main>
      <Gallery />
      <Pricing />
      {/* call to action */}
      <section className="py-6 bg-gray-100 text-gray-900">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
            Sign up now
          </h1>
          <p className="text-xl font-medium text-center">
            Are you sold? Get in touch with us for weekly and monthly pass
            availability. We sell yearly memberships starting at the end of
            every year, about the last week of November til the beginning of
            March.
          </p>
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
            <button className="px-8 py-3 text-lg font-semibold rounded bg-darkblue text-gray-50">
              Get in Touch
            </button>
            <button className="px-8 py-3 text-lg font-normal border rounded bg-gray-800 text-gray-50 border-gray-700">
              Waitlist
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
