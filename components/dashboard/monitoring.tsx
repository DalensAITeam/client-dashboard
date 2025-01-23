import { Camera, ChevronDown, Maximize2 } from "lucide-react";
import cameraO1Image from "@/assets/images/camera-01.png";
import Image from "next/image";

const Monitoring = () => {
    return (
      <div className="flex flex-col items-start p-0 gap-[15.77px]">
        <div className="flex items-center justify-between">
          <h2 className="font-poppins text-[17.7429px] leading-[27px] text-[#1A1A1A]">
            Quick Monitoring
          </h2>
          <button className="font-poppins font-medium text-[8.64776px] leading-[13px] text-main">
            See more
          </button>
        </div>
        <div className="flex flex-row items-start p-0 gap-[25.49px] w-[345px] h-[209.94px]">
          <div className="w-[345px] h-[212.62px] relative">
            <Image
              width={345}
              height={212.62}
              draggable={false}
              alt="Camera 01 Feed"
              src={cameraO1Image.src}
            />
            {/* TODO MAKE THIS A SELECT BOX */}
            <div className="flex flex-row items-center justify-center p-[4.55145px] gap-[4.55px] absolute top-0 left-0 w-[107.87px] h-[24.1px] bg-[rgba(107,107,107,0.5)] backdrop-blur-[2.27573px]">
              <div className="flex flex-row items-center p-0 gap-[7.28px] w-[81.21px] h-[15px]">
                <span className="font-poppins text-[10.0132px] leading-[15px] text-white">
                  Camera #01
                </span>
                <ChevronDown
                  role="button"
                  size={10.92}
                  className="text-white"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 bg-[rgba(10,9,8,0.3)] flex items-center justify-center h-[27.31px] w-[63.72px]">
              <div className="flex flex-row items-center justify-center p-0 gap-[12.29px] w-[48.7px] h-[18.21px]">
                {/* TODO FUNCTIONALITY */}
                <Maximize2
                  role="button"
                  className="rotate-90 fill-white text-white"
                  size={18.21}
                />
                <Camera
                  role="button"
                  className="fill-white text-white"
                  size={18.21}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Monitoring;