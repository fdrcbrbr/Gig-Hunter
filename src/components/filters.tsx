"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { GENRE_DISPLAY_NAMES } from "@/data/consts"; 

export default function Filters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  const currentGenreCode = searchParams.get("genre") || "";


  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("genre", value);
    } else {
      params.delete("genre");
    }

    replace(`${pathname}?${params.toString()}`);
  };


  const genreOptions = [
    { name: "All Genres", code: "" },
    ...Object.entries(GENRE_DISPLAY_NAMES).map(([name, code]) => ({
      name,
      code,
    })),
  ];

  return (
    <div className="flex gap-4 p-4 bg-gray-100 rounded-lg">
      {/* Filtro per Genere */}
      <div className="flex flex-col">
        <span className="font-medium mb-2">Genre</span>
        <select
          value={currentGenreCode}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="px-4 py-2 rounded-full border border-gray-300 bg-white"
        >
          {genreOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
