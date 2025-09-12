import { Link } from "react-router-dom";

function Menu() {
  return (
    <header className="bg-gray-900 text-white flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-yellow-500">ShilpOneer</h1>

      {/* Search bar + About Us button */}
      <div className="flex-1 mx-6 flex items-center gap-4">
        <input
          type="text"
          placeholder="Search for products, brands and more..."
          className="w-full p-2 rounded-l-md border text-black"
        />
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-r-md">
          Search
        </button>

        {/* ✅ About Us button right after search */}
        <Link
          to="/about"
          className="ml-4 px-4 py-2 bg-gray-700 rounded-md hover:bg-yellow-500 hover:text-black transition"
        >
          About Us
        </Link>
      </div>

      {/* Cart stays on right side */}
      <nav>
        <span className="text-gray-400 cursor-pointer hover:text-yellow-400 transition-colors">
          Cart
        </span>
      </nav>
    </header>
  );
}

export default Menu;
