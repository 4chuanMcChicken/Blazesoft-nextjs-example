import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className=" flex">
        <div>
          <Link href="/" className=" mr-4">
            Home Page
          </Link>
        </div>
        <div>
          <Link href="/books">Books</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
