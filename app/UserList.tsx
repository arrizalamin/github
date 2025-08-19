"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export type User = {
  login: string;
  id: string;
  avatar_url: string;
};

export default function UserList(props: { users: User[] }) {
  const search = useSearchParams();
  const term = search.get("query") ?? "";
  const filteredUsers = useMemo(() => {
    return props.users.filter((user) =>
      user.login.toLowerCase().startsWith(term.toLowerCase())
    );
  }, [props.users, term]);
  return (
    <>
      {filteredUsers.map((user) => (
        <Link href={`/users/${user.login}`} key={user.id}>
          <li className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-md border border-gray-100 hover:border-gray-200 mb-2">
            <img
              className="size-16 rounded-full object-cover border-2 border-gray-200"
              width={64}
              height={64}
              src={user.avatar_url}
              alt={user.login}
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg text-gray-800">
                {user.login}
              </h3>
              <p className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <a href={`https://github.com/${user.login}`} target="_blank">
                  View GitHub Profile
                </a>
              </p>
            </div>
          </li>
        </Link>
      ))}
    </>
  );
}
