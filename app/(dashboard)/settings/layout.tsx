import type { ReactNode } from "react";

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-10 w-full transition duration-300 ease">
      {children}
    </div>
  );
}
