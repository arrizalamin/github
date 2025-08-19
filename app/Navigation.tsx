"use client";

import Link from "next/link";

export default function NavigationButton(props: { since: string }) {
  return (
    <div className="flex justify-between mt-6">
      <Link
        className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          if (window.history.length > 1) {
            window.history.back();
          }
        }}
      >
        Previous
      </Link>
      <Link
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
        href={`/?since=${props.since}`}
      >
        Next
      </Link>
    </div>
  );
}
