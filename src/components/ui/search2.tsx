import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import Select, { SingleValue } from "react-select";
import { SearchIcon } from "lucide-react";
import { getEventsByKeyword} from "@/data/events";
import { Event, EventsRes } from "@/lib/interfaces";

interface OptionType {
  value: string;
  label: string;
}

export default function SearchBar2() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [options, setOptions] = React.useState<OptionType[]>([]);

  const loadOptions = useDebouncedCallback(async (inputValue: string) => {
    if (!inputValue) {
      setOptions([]);
      return;
    }
    setIsLoading(true);
    try {
      const data: EventsRes = await getEventsByKeyword(inputValue);
      const matches: OptionType[] = data._embedded.events.map((event: Event) => ({
        value: event.id,
        label: event.name,
      }));
      setOptions(matches);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  }, 300);

  const handleSelect = (selectedOption: SingleValue<OptionType>) => {
    const params = new URLSearchParams(searchParams);
    if (selectedOption) {
      params.set("query", selectedOption.label);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center w-full my-10">
      <div className="relative w-full max-w-md">
        <Select
          isClearable
          isSearchable
          isLoading={isLoading}
          options={options}
          onInputChange={loadOptions}
          onChange={handleSelect}
          placeholder="Search for events..."
          noOptionsMessage={({ inputValue }) =>
            !inputValue ? "Start typing..." : "No results found"
          }
          defaultValue={
            searchParams.get("query")
              ? { value: searchParams.get("query")!, label: searchParams.get("query")! }
              : null
          }
          className="basic-single"
          classNamePrefix="select"
          styles={{
            control: (base) => ({
              ...base,
              borderRadius: "9999px",
              backgroundColor: "#f3f4f6",
              border: "none",
              paddingLeft: "40px",
            }),
          }}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
