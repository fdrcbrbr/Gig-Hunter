"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [country, setCountry] = useState<string>(searchParams.get("country")?.toString() || "");

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams();
    if (term) {
      params.set("query", term);
    }
    if (country) {
      params.set("country", country);
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <div className="flex flex-col items-center w-full my-10 space-y-4">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search for an artist or a city.."
          defaultValue={searchParams.get("query")?.toString() || ""}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full rounded-lg bg-gray-100 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="w-full max-w-md">
        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            const params = new URLSearchParams(searchParams.toString());
            if (e.target.value) {
              params.set("country", e.target.value);
            } else {
              params.delete("country");
            }
            const query = searchParams.get("query")?.toString() || "";
            if (query) {
              params.set("query", query);
            }
            replace(`${pathname}?${params.toString()}`, { scroll: false });
          }}
          className="w-full rounded-lg bg-gray-100 py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <option value="">Select a country</option>
          <option value="IT">Italy</option>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
          <option value="ES">Spain</option>
          {/* Aggiungi altri paesi secondo necessità */}
        </select>
      </div>
    </div>
  );
}


