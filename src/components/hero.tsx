import SearchBar2 from "./ui/search";

export default function Hero() {
  return (
    <div className="w-full min-h-[70vh] p-4 flex flex-col items-center justify-center text-center">
      <h2 className="text-[var(--color-cream)] text-5xl font-bold mb-4">
        Find Your Next Gig
      </h2>
      <p className="text-[var(--color-cream)] text-xl max-w-2xl">
        Explore live music events in your city. From indie gigs to big festivals, we&apos;ve got you covered.
      </p>
      <SearchBar2/>
    </div>
  );
}