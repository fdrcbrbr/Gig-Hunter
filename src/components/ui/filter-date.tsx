"use client";
import * as React from "react";
import { ChevronDownIcon, XIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function FilterDate() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(() => {
    const dateParam = searchParams.get("date");
    return dateParam ? new Date(dateParam) : undefined;
  });
  const [formattedDate, setFormattedDate] = React.useState<string>("");

  React.useEffect(() => {
    if (date) {
      setFormattedDate(date.toLocaleDateString("se-SE"));
    } else {
      setFormattedDate("");
    }
  }, [date]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setOpen(false);
    const params = new URLSearchParams(searchParams.toString());
    if (selectedDate) {
      const formattedDate = selectedDate
        .toLocaleDateString("sv-SE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(/\D/g, "-"); // Formatta come "YYYY-MM-DD"
      params.set("date", formattedDate);
    } else {
      params.delete("date");
    }
    router.push(`?${params.toString()}`);
  };

  const handleClearDate = () => {
    setDate(undefined);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("date");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal text-neutral-400 border-neutral-400 h-10"
          >
            {date ? (
              formattedDate
            ) : (
              <span className="text-neutral-400">Select date</span>
            )}
            <ChevronDownIcon className="h-4 w-4 text-neutral-100" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-3" align="center">
          <div className="flex flex-col gap-3">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              className="w-60"
            />
            {date && (
              <Button
                variant="outline"
                onClick={handleClearDate}
                className="flex items-center gap-2"
              >
                <XIcon className="h-4 w-4" />
                Clear date
              </Button>
            )}
          </div>
        </PopoverContent>
      </Popover>
      {date && (
        <p className="text-neutral-100">Selected date: {formattedDate}</p>
      )}
    </div>
  );
}
