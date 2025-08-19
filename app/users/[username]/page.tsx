import type { User } from "@/app/UserList";
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
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          className="size-32 rounded-full object-cover border-4 border-gray-100"
          src={user.avatar_url}
          alt={user.login}
        />
        <div className="flex-1 text-center md:text-left">
          <p className="text-3xl font-bold text-gray-800">{user.name}</p>
          <p className="text-gray-600 mt-1">@{user.login}</p>
          <p className="mt-4 text-gray-700 max-w-md">{user.bio}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <div className="flex items-center text-gray-600">
              {user.location}
            </div>
            <div className="flex items-center text-gray-600">
              <a
                href={`https://github.com/${user.login}`}
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-start gap-8 mt-8 pt-6 border-t border-gray-100">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-800">{user.followers}</p>
          <p className="text-gray-600">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-800">{user.following}</p>
          <p className="text-gray-600">Following</p>
        </div>
      </div>
    </div>
  );
}
