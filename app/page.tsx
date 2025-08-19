import Image from "next/image";
import Search from "./Search";
import type { User } from "./UserList";
import UserList from "./UserList";

const USERS_API = "https://api.github.com/users";

export default async function Home() {
  const users: User[] = await (await fetch(USERS_API)).json();
  return (
    <div className="font-sans items-center justify-items-center min-h-screen">
      <Search />
      <ul className="flex flex-col gap-2 mt-4">
        <UserList users={users} />
      </ul>
    </div>
  );
}
