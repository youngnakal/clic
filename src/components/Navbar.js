import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold"></h1>
      <div>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 rounded"
        >
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
