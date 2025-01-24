import {
  FeedingAlarm,
  FeedingStatus,
  HealthStatus,
  Metrics,
  Monitoring,
  TotalNumberOfAnimals,
} from "@/components/dashboard";
import LineChart from "@/components/dashboard/app";
import { faker } from "@faker-js/faker";

const months: Month[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mar",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function DashboardLayout() {
  return (
    <>
      <Monitoring />
      <div className="flex items-start gap-x-[20px] mt-[25.27px]">
        <TotalNumberOfAnimals />
        <FeedingAlarm />
      </div>
      <HealthStatus
        threats={0}
        status="Perfect"
        data={Array.from({ length: 30 }).map(() => ({
          label: faker.animal.type(),
          value: faker.number.int(),
        }))}
      />
      <FeedingStatus status={faker.number.int({ max: 80, min: 20 })} />
      <Metrics />
      <LineChart/>
    </>
  );
}
