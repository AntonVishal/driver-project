"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [vehicleNo, setVehicleNo] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add actual authentication logic here
    if (vehicleNo) {
      // For now, just simulate a successful login
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 mb-[300px] rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-white text-center">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="vehicleNo" className="block mb-2 text-white">
              Vehicle No
            </label>
            <input
              type="text"
              id="vehicleNo"
              value={vehicleNo}
              onChange={(e) => setVehicleNo(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-white placeholder-white focus:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
