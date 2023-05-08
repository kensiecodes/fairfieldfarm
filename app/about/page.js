import Profile from "../Components/profile";

export default function About() {
  return (
    <main className="text-gray-600">
      <h1 className="text-center pt-10 text-2xl">About Our Farm</h1>
      <p className="md:w-1/2 text-center pt-4 m-auto p-5">
        Our farm is a historic plot of land that belonged to a family for ten
        generations before us. We acquired the land after the estate fell to
        foreclosure, and wanted to honor the rich history by restoring what was
        left and building a modern, permaculture, community based farm in it's
        place.
      </p>
      <p className="md:w-1/2 text-center pt-1 m-auto">
        We are for the community, by the community.
      </p>
      <Profile />
    </main>
  );
}
