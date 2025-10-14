"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Filters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  const currentCity = searchParams.get("city") || "";
  const currentDate = searchParams.get("date") || "";
  const currentGenre = searchParams.get("genre") || "";


  const handleFilterChange = (filterType: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(filterType, value);
    } else {
      params.delete(filterType);
    }

    replace(`${pathname}?${params.toString()}`);
  };


  const cities = ["Stockholm", "Gothenburg", "Malmö", "All Cities"];
  const dates = ["Today", "This Week", "This Month", "All Dates"];
  const genres = ["Rock", "Pop", "Jazz", "Electronic", "All Genres"];

  return (
    <div className="flex gap-4 p-4 bg-gray-100 rounded-lg">
      {/* City filter*/}
      <div className="flex flex-col">
        <span className="font-medium mb-2">Plats</span>
        <select
          value={currentCity}
          onChange={(e) => handleFilterChange("city", e.target.value === "All Cities" ? "" : e.target.value)}
          className="px-4 py-2 rounded-full border border-gray-300 bg-white"
        >
          {cities.map((city) => (
            <option key={city} value={city === "All Cities" ? "" : city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Date filter */}
      <div className="flex flex-col">
        <span className="font-medium mb-2">Datum</span>
        <select
          value={currentDate}
          onChange={(e) => handleFilterChange("date", e.target.value === "All Dates" ? "" : e.target.value)}
          className="px-4 py-2 rounded-full border border-gray-300 bg-white"
        >
          {dates.map((date) => (
            <option key={date} value={date === "All Dates" ? "" : date}>
              {date}
            </option>
          ))}
        </select>
      </div>

      {/* Genre filter */}
      <div className="flex flex-col">
        <span className="font-medium mb-2">Genre</span>
        <select
          value={currentGenre}
          onChange={(e) => handleFilterChange("genre", e.target.value === "All Genres" ? "" : e.target.value)}
          className="px-4 py-2 rounded-full border border-gray-300 bg-white"
        >
          {genres.map((genre) => (
            <option key={genre} value={genre === "All Genres" ? "" : genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
