import React from "react";

const Plans = ({ title, price }) => {
  return (
    <div className="flex font-['poppins'] md:w-4/5  rounded-lg flex-col  border border-slate-300 items-center gap-3 p-5">
      <h1 className="text-xl font-medium">{title}</h1>
      <p className="price ">N{price}</p>
      <div className="h-[250px] flex justify-center items-center">
        Coming Soon
      </div>
      <button className="flex font-medium bg-[#70E000] w-2/3 justify-center rounded-lg text-white p-3">
        Add Plan
      </button>
    </div>
  );
};

const Price = () => {
  return (
    <div className="font-['poppins'] flex flex-col gap-6 p-10 ">
      <h2 className="text-2xl">Pricing</h2>
      <div className="grid  md:grid-cols-2 gap-10">
        <Plans title="Regular" price="2000" />
        <Plans title="Premium" price="10000" />
        <Plans title="Enterprise" price="31000" />
      </div>
    </div>
  );
};

export default Price;
