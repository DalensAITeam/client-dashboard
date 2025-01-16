import Image from "next/image";
import { HeroStreaks } from "../svg";
import heroImage from "@/assets/images/hero.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

export const B: FC<ComponentProps<"b">> = ({ className, ...props }) => (
  <b {...props} className={cn("text-main font-normal", className)} />
);


const Hero = () => {
  return (
    <>
      <div className="relative min-h-[232px]">
        <h1 className="font-inter text-[48px] leading-[58px] text-[#1A1A1A]">
          Effortless <B>Livestock Monitoring</B> and Security with <B>AI</B>
        </h1>
        <HeroStreaks className="absolute bottom-0 right-0 -z-10" />
      </div>
      <figure className="m-0 p-0">
        <Image
          src={heroImage.src}
          alt="Hero Image"
          height={391.91}
          width={391.91}
          className="size-[391.91px]"
        />
      </figure>
      <p className="font-poppins text-[18px] leading-[27px] text-[#1A1A1A]">
        Welcome to the future of farming with AI, your trusted partner in
        advanced agricultural technology. Our cutting-edge solution harnesses
        the power of AI to revolutionize the way you manage your farm animals
      </p>
      <div className="mt-[32px]">
        <Link
          href="/login"
          prefetch
          className="flex flex-row items-center justify-center p-[20px_30px] gap-[10px] h-[48px] w-[264px] bg-main rounded-[50px]"
        >
          <button className="font-poppins font-medium text-[17px] leading-[26px] text-white">
            Sign up for a free demo
          </button>
        </Link>
      </div>
    </>
  );
};

export default Hero;
