"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { GENRE_DISPLAY_NAMES } from "@/data/consts";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterGenre() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const currentGenreCode = searchParams.get("genre") || "";

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== "all") {
      params.set("genre", value);
    } else {
      params.delete("genre");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const genreOptions = [
    { name: "- Clear Genre Filter -", code: "all" },
    ...Object.entries(GENRE_DISPLAY_NAMES).map(([name, code]) => ({
      name,
      code,
    })),
  ];

  return (
    <div className="flex bg-neutral-100 rounded-lg h-fit">
      <Select value={currentGenreCode} onValueChange={handleFilterChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a genre" />
        </SelectTrigger>
        <SelectContent className="max-h-[200px] overflow-y-auto">
          <SelectGroup>
            <SelectLabel>Genres</SelectLabel>
            {genreOptions.map((option) => (
              <SelectItem key={option.code} value={option.code}>
                {option.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
