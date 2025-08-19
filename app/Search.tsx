"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Search() {
  const search = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const term = search.get("query") ?? "";
  const handleSearch = (term: string) => {
    if (term) {
      replace(`${pathname}?query=${term}`);
    } else {
      replace(pathname);
    }
  };

  return (
    <input
      className="w-full p-4 pr-4 rounded-xl border border-gray-200 shadow-sm"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      placeholder="Search..."
      defaultValue={term}
    />
  );
}
