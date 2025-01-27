import {
  FeedingAlarm,
  FeedingStatus,
  HealthStatus,
  Metrics,
  Monitoring,
  TotalNumberOfAnimals,
} from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <>
      <Monitoring />
      <div className="flex items-start gap-x-[20px] mt-[25.27px]">
        <TotalNumberOfAnimals />
        <FeedingAlarm />
      </div>
      <HealthStatus />
      <FeedingStatus />
      <Metrics />
    </>
  );
}
