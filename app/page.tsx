import Image from "next/image";
import Search from "./Search";
import type { User } from "./UserList";
import UserList from "./UserList";
import NavigationButton from "./Navigation";

const USERS_API = "https://api.github.com/users";

export default async function Home(props: {
  searchParams: Promise<{ since?: string }>;
}) {
  const search = await props.searchParams;
  const since = search.since;
  const users: User[] = await (
    await fetch(since ? `${USERS_API}?since=${since}` : USERS_API)
  ).json();
  const lastUser = users[users.length - 1];
  return (
    <div className="font-sans items-center justify-items-center min-h-screen">
      <div className="mb-8">
        <Search />
      </div>
      <ul className="mt-6">
        <UserList users={users} />
      </ul>
      <NavigationButton since={lastUser.id} />
    </div>
  );
}
