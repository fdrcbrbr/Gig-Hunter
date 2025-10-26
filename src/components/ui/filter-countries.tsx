"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { COUNTRY_DISPLAY_NAMES } from "@/data/consts";
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

export default function FilterCountries() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const currentCountryCode = searchParams.get("country") || "";

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== "all") {
      params.set("country", value);
    } else {
      params.delete("country");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const countryOptions = [
    { name: "- Clear Country Filter -", code: "all" },
    ...Object.entries(COUNTRY_DISPLAY_NAMES).map(([name, code]) => ({
      name,
      code,
    })),
  ];

  return (
    <div className="flex bg-neutral-100 rounded-lg h-fit">
      <Select value={currentCountryCode} onValueChange={handleFilterChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent className="max-h-[200px] overflow-y-auto">
          <SelectGroup>
            <SelectLabel>Country</SelectLabel>
            {countryOptions.map((option) => (
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