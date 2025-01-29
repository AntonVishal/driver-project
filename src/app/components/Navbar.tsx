"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Add actual logout logic
    router.push("/login");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-white">Driver Dashboard</h1>
          <button
            onClick={() => router.push("/")}
            className="text-white hover:text-gray-300"
          >
            Home
          </button>
        </div>
        <button
          onClick={handleLogout}
          className="bg-primary text-white px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
