import SearchBar from "./ui/search";
import FilterGenre from "./ui/filter-genre";
import FilterDate from "./ui/filter-date";

export default function Hero() {
  return (
    <div className="w-full min-h-[70vh] p-4 flex flex-col items-center justify-center text-center">
      <h2 className="text-[var(--color-orange)] text-5xl font-bold mb-4">
        Find Your Next Gig
      </h2>
      <p className="text-[var(--color-yellow)] text-xl max-w-2xl">
        Explore live music events in your city. From indie gigs to big
        festivals, we&apos;ve got you covered.
      </p>
      <SearchBar />
      <div className="flex gap-8">
        <FilterGenre />
        <FilterDate />
      </div>
    </div>
  );
}
