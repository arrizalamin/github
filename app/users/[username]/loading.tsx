import Link from "next/link";

export default async function UsernamePage() {
  return (
    <div>
      <Link href="/" className="bg-gray-200 p-2">
        Back to users
      </Link>
      <div className="mt-20">
        <p className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
          &nbsp;
        </p>
        <p className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
          &nbsp;
        </p>
        <p className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
          &nbsp;
        </p>
        <p className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
          &nbsp;
        </p>
        <p className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
          &nbsp;
        </p>
      </div>
    </div>
  );
}
