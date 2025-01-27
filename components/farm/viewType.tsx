import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import type { Dispatch, FC, SetStateAction } from "react";
import camera01Feed from "@/assets/images/temp/camera01Feed.png";
import Image from "next/image";

type props = {
  setViewState: Dispatch<SetStateAction<boolean>>;
};

const ViewType: FC<props> = ({ setViewState }) => {
  return (
    <>
      <div
        style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.4)" }}
        className="flex justify-center items-center "
      >
        <div className="flex flex-col justify-center items-center mt-[8px] cursor-pointer !text-green-500 mb-[10px]">
          <GridViewRoundedIcon className="!text-green-500 !text-[35px]" />
          <h3>Catergory View</h3>
        </div>
        <div
          className="flex flex-col justify-center items-center ml-[10px] mt-[8px] mb-[10px] cursor-pointer"
          onClick={() => {
            setViewState(false);
          }}
        >
          <VisibilityIcon className="!text-[35px] !opacity-[0.4]" />
          <h3>Live View</h3>
        </div>
      </div>

      {/* TODO MAP THE DIFFERENT FEEDS  */}
      <section className="grid grid-cols-[1fr_4fr] gap-4 divide-x divide-gray-300 h-screen">
        <div className="p-3 grid gap-y-2 overflow-x-scroll scrollbar h-full">
          <div className="relative hover:cursor-pointer border border-[#70e000]">
            <Image
              draggable={false}
              alt="Camera 01 Feed"
              src={camera01Feed.src}
              width={camera01Feed.width}
              height={camera01Feed.height}
            />
            <div className="absolute bottom-0 left-0 w-full p-2 bg-gray-300/10 backdrop-brightness-20 backdrop-blur-2xl text-white capitalize text-center">
              camera 1
            </div>
          </div>
          <Image
            draggable={false}
            alt="Camera 01 Feed"
            src={camera01Feed.src}
            width={camera01Feed.width}
            height={camera01Feed.height}
          />
          <Image
            draggable={false}
            alt="Camera 01 Feed"
            src={camera01Feed.src}
            width={camera01Feed.width}
            height={camera01Feed.height}
          />
          <Image
            draggable={false}
            alt="Camera 01 Feed"
            src={camera01Feed.src}
            width={camera01Feed.width}
            height={camera01Feed.height}
          />
          <Image
            draggable={false}
            alt="Camera 01 Feed"
            src={camera01Feed.src}
            width={camera01Feed.width}
            height={camera01Feed.height}
          />
          <Image
            draggable={false}
            alt="Camera 01 Feed"
            src={camera01Feed.src}
            width={camera01Feed.width}
            height={camera01Feed.height}
          />
        </div>

        <div className="p-3 divide-y divide-gray-400">
          <div>
            <Image
              draggable={false}
              alt="Camera 01 Feed"
              src={camera01Feed.src}
              width={camera01Feed.width}
              height={camera01Feed.height}
              className="object-contain w-full"
            />
          </div>

          <div className=" border-y border-gray-500 my-2 p-4">
            <p>
              Invader check <span>icon</span>
            </p>
          </div>

          <div className="divide divide-gray-400 text-center grid grid-cols-2 gap-4 my-4">
            <div className="p-10 shadow-lg">
              <h3 className="font-bold text-2xl">Health Check</h3>
            </div>

            <div className="p-10 shadow-lg">
              <h3 className="font-bold text-2xl">Feeding Check</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewType;
