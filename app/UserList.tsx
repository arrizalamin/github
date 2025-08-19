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
        <Link href={`/users/${user.login}`}>
          <li className="flex gap-4" key={user.id}>
            <img
              width={100}
              height={100}
              src={user.avatar_url}
              alt={user.login}
            />
            <div className="flex flex-col gap-2">
              <p>{user.login}</p>
              <p>
                <a href={`https://github.com/${user.login}`} target="_blank">
                  Link to profile
                </a>
              </p>
            </div>
          </li>
        </Link>
      ))}
    </>
  );
}
