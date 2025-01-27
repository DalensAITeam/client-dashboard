import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import type { Dispatch, FC, SetStateAction } from "react";
import camera01Feed from "@/assets/images/temp/camera01Feed.png";
import Image from "next/image";

type props = {
  setViewState: Dispatch<SetStateAction<boolean>>;
};

const ListView: FC<props> = ({ setViewState }) => {
  return (
    <>
      <div
        style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.4)" }}
        className="flex justify-center items-center "
      >
        <div
          className="flex flex-col justify-center items-center mt-[8px] mb-[10px] cursor-pointer"
          onClick={() => {
            setViewState(true);
          }}
        >
          <GridViewRoundedIcon className="!opacity-[0.4] !text-[35px]" />
          <h3>Catergory View</h3>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer ml-[10px] mt-[8px] mb-[10px] !text-green-500 ">
          <VisibilityIcon className="!text-[35px] !text-green-500 " />
          <h3>Live View</h3>
        </div>
      </div>

      {/*  */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 divide-x divide-gray-300 h-screen py-4">
        <div className="p-6 shadow border">
          <Image
            draggable={false}
            alt="Camera 01 Feed"
            src={camera01Feed.src}
            width={camera01Feed.width}
            height={camera01Feed.height}
          />
        </div>

        <div className="p-6 shadow border">
          <Image
            draggable={false}
            alt="Camera 01 Feed"
            src={camera01Feed.src}
            width={camera01Feed.width}
            height={camera01Feed.height}
          />
        </div>

        <div className="p-6 shadow border">
          <Image
            draggable={false}
            alt="Camera 01 Feed"
            src={camera01Feed.src}
            width={camera01Feed.width}
            height={camera01Feed.height}
          />
        </div>

        <div className="p-6 shadow border">
          <Image
            draggable={false}
            alt="Camera 01 Feed"
            src={camera01Feed.src}
            width={camera01Feed.width}
            height={camera01Feed.height}
          />
        </div>
      </section>
    </>
  );
};

export default ListView;
