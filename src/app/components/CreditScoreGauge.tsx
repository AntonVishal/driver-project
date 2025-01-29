"use client";

import { PieChart, Pie, Cell } from "recharts";

interface CreditScoreGaugeProps {
  creditScore: number;
  minScore: number;
  maxScore: number;
}

export default function CreditScoreGauge({
  creditScore,
  minScore,
  maxScore,
}: CreditScoreGaugeProps) {
  const percentage = ((creditScore - minScore) / (maxScore - minScore)) * 100;

  const gaugeData = [
    { name: "remainder", value: 100 - percentage },
    { name: "score", value: percentage },
  ];

  const COLORS = ["#ef4444", "#f97316", "#22c55e"];

  const getScoreColor = (score: number) => {
    if (score < 3000) return COLORS[0];    // Poor: 0-3,000
    if (score < 7000) return COLORS[1];    // Fair: 3,000-7,000
    return COLORS[2];                      // Good: 7,000-10,000
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-48">
        <PieChart width={256} height={140}>
          <Pie
            startAngle={0}
            endAngle={180}
            data={gaugeData}
            cx="50%"
            cy="100%"
            innerRadius={64}
            outerRadius={128}
            fill="#8884d8"
            dataKey="value"
          >
            <Cell fill="#374151" />
            <Cell fill={getScoreColor(creditScore)} />
          </Pie>
        </PieChart>
        {/* Score markers */}
        <div className="absolute bottom-0 left-4 text-sm text-white">
          {minScore}
        </div>
        <div className="absolute bottom-0 right-4 text-sm text-white">
          {maxScore}
        </div>
        {/* Current score */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center">
          <div className="bg-white rounded-full p-3 shadow-lg">
            <span className="text-2xl font-bold">{creditScore}</span>
          </div>
          <h2 className="text-2xl font-bold text-white mt-4">Credit Score</h2>
        </div>
      </div>
      {/* Score ranges */}
      <div className="flex justify-center w-full mt-4 px-4 space-x-8">
        <div className="text-red-500 border-2 border-red-500 rounded-full p-2 text-sm">Poor</div>
        <div className="text-orange-500 border-2 border-orange-500 rounded-full p-2 text-sm">Fair</div>
        <div className="text-green-500 border-2 border-green-500 rounded-full p-2 text-sm">Good</div>
      </div>
    </div>
  );
}
