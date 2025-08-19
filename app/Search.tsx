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
      className="border p-2 px-4"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      placeholder="Search..."
      defaultValue={term}
    />
  );
}
