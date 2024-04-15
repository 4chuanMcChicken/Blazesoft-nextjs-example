import Link from "next/link";
export default function Home() {
  return (
    <div>
      <p className="mb-4">Thanks you for considering my application</p>
      <p className="mb-4">
        Please kindly click the
        <Link
          href="/books"
          className=" font-medium text-blue-500 hover:underline"
        >
          {" "}
          Books{" "}
        </Link>
        on the navigation bar for more information.
      </p>
    </div>
  );
}
