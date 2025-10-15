"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
}: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex gap-2 justify-center my-4">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 rounded ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}