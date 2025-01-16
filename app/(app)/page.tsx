import { Hero, WhatWeOffer, Hightlights, HowItWorks } from "@/components/home";

export default function Home() {
  return (
    <div className="mx-[20px]">
      <Hero />
      <div className="gap-y-[80px] flex flex-col w-full mt-[80px]">
        <WhatWeOffer />
        <Hightlights />
        <HowItWorks />
      </div>
    </div>
  );
}
