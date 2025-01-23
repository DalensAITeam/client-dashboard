import { HealthStatus, Monitoring, PostMonitor } from "@/components/dashboard";

export default function DashboardLayout() {
  return (
    <>
      <Monitoring />
      <PostMonitor />
      <HealthStatus />
    </>
  );
}
