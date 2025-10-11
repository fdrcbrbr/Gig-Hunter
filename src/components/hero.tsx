
// components/Hero.jsx
export default function Hero() {
  return (
    <div className="w-full min-h-[70vh] p-4 flex flex-col items-center justify-center text-center">
      <h1 className="text-[var(--color-cream)] text-5xl font-bold mb-4">
        Find Your Next Gig
      </h1>
      <p className="text-[var(--color-cream)] text-xl max-w-2xl">
        Explore live music events in your city. From indie gigs to big festivals, we&apos;ve got you covered.
      </p>
    </div>
  );
}




/* import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Hero() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
} */
