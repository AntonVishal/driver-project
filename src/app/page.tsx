import { redirect } from "next/navigation";
import CreditScoreGauge from "./components/CreditScoreGauge";

export default function Home() {
  // TODO: Add actual authentication check
  const isAuthenticated = true;

  if (!isAuthenticated) {
    redirect("/login");
  }

  const vehicleNumber = "MH12AB1234";
  const ownerName = "John Doe";
  const registeringAuthority = "RTO Mumbai";
  const vehicleAge = "5 years";
  const vehicleStatus = "Active";
  const creditScore = 7000;

  // Credit score gauge data
  const minScore = 0;
  const maxScore = 10000;

  return (
    <main className="container mx-auto p-8 space-y-8">
      {/* Vehicle Details Section */}
      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-white border-b pb-2">
          Vehicle details
        </h2>
        <div className="space-y-4">
          <div>
            <p className="text-lg text-white">
              Vehicle Number: {vehicleNumber}
            </p>
          </div>
          <div>
            <p className="text-lg text-white">Owner Name: {ownerName}</p>
          </div>
          <div>
            <p className="text-lg text-white">
              Registering Authority: {registeringAuthority}
            </p>
          </div>
          <div>
            <p className="text-lg text-white">Vehicle Age: {vehicleAge}</p>
          </div>
          <div>
            <p className="text-lg text-white">
              Vehicle Status: {vehicleStatus}
            </p>
          </div>
        </div>
      </div>

      {/* Credit Score Section */}
      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        <CreditScoreGauge
          creditScore={creditScore}
          minScore={minScore}
          maxScore={maxScore}
        />
      </div>

      {/* Redeem Section */}
      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-white">
          Welcome to the Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h2 className="font-bold mb-2 text-white">Redeem for 2000</h2>
            <button className="bg-primary text-white px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors">
              Choose
            </button>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h2 className="font-bold mb-2 text-white">Redeem for 5000</h2>
            <button className="bg-primary text-white px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors">
              Choose
            </button>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h2 className="font-bold mb-2 text-white">Redeem for 10000</h2>
            <button className="bg-primary text-white px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors">
              Choose
            </button>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h2 className="font-bold mb-2 text-white">Premium</h2>
            <button className="bg-primary text-white px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors">
              Choose
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
