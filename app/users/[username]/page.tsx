import type { User } from "@/app/UserList";
import Link from "next/link";
import { notFound } from "next/navigation";

const USER_DETAIL_API_BASE = "https://api.github.com/users/";

type UserDetail = User & {
  name: string;
  bio: string | null;
  location: string;
  followers: number;
  following: number;
};

export default async function UsernamePage(props: {
  params: Promise<{ username?: string }>;
}) {
  const params = await props.params;
  const { username } = params;

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const resp = await fetch(USER_DETAIL_API_BASE + username);
  if (!resp.ok) {
    if (resp.status === 404) {
      notFound();
    } else {
      throw Error("failed to fetch user");
    }
  }
  const user: UserDetail = await resp.json();

  return (
    <div>
      <Link href="/" className="bg-gray-200 p-2">
        Back to users
      </Link>
      <div className="mt-20">
        <p>Name: {user.name}</p>
        <p>Bio: {user.bio}</p>
        <p>Location: {user.location}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
      </div>
    </div>
  );
}
