"use client";

import React from "react";

const NumberOfAnimals = ({ totalAnimals, threatCount = 0, feedingCount = 0 }) => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-3">
      <div className="flex items-center gap-2 text-sm">
        <span className="font-semibold text-gray-700">Total: </span>
        <span className="font-bold text-lg">{totalAnimals}</span>
      </div>
      <div className="h-4 w-px bg-gray-200" />
      <div className="flex items-center gap-2 text-sm">
        <span className={`px-2 py-0.5 rounded ${threatCount > 0 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {threatCount} threats
        </span>
      </div>
      <div className="h-4 w-px bg-gray-200" />
      <div className="flex items-center gap-2 text-sm">
        <span className={`px-2 py-0.5 rounded ${
          feedingCount > totalAnimals * 0.4 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
        }`}>
          {feedingCount} feeding
        </span>
      </div>
    </div>
  );
};

export default NumberOfAnimals;
