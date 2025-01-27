"use client";

import ListView from "@/components/farm/liveView";
import ViewType from "@/components/farm/viewType";
import { useState } from "react";

export default function FarmMonitorPage() {
  const [viewState, setViewState] = useState(false);

  return viewState ? (
    <ViewType setViewState={setViewState} />
  ) : (
    <ListView setViewState={setViewState} />
  );
}
