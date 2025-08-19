"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div>
      <Link href="/" className="bg-gray-200 p-2">
        Back to users
      </Link>
      <div className="mt-20">
        <p>User not found</p>
      </div>
    </div>
  );
}
