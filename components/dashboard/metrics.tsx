// FIXME UPDATE THE CSS WHERE NEEDED

import { faker } from "@faker-js/faker";
import MetricsChart from "./metricsChart";
import type { ComponentProps } from "react";

function gen() {
  return Array.from({ length: faker.number.int({ min: 1, max: 20 }) })
    .map(() => ({
      magnitude: faker.number.int({ min: 1, max: 200 }),
      timestamp: faker.date.anytime().getTime(),
    }))
    .sort((a, b) => a.timestamp - b.timestamp);
}

const metrics: ComponentProps<typeof MetricsChart>["metrics"] = [
  {
    name: "Health",
    color: "#70DE00",
    data: gen(),
  },
  {
    name: "Animal Attack",
    data: gen(),
    color: "#E05200",
  },
  {
    name: "Feeding",
    data: gen(),
    color: "#01A8F2",
  },
];

const Metrics = () => {
  return (
    <div className="flex flex-1 w-full md:md:4/5 flex-col md:justify-self-start">
      <h4 className="text-black font-medium text-2xl my-4">Metrics</h4>  
      <MetricsChart metrics={metrics} />
    </div>
  );
};

export default Metrics;
