import React from "react";
import { Play, Info } from "lucide-react"; // icons

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] p-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className=" my-4 md:m-0 flex gap-4">
        {/* Play Button */}
        <button className="flex items-center gap-2 bg-white hover:opacity-70 text-black px-2 md:px-6 py-2 text-md md:text-lg rounded-md  transition">
          {/* { p-2 md:px-6 py-3} */}
          <Play className="w-6 h-6" fill="black" />
          Play
        </button>

        {/* Info Button */}
        <button className="flex items-center gap-2 bg-gray-500 hover:opacity-70 text-white font-semibold px-2 md:px-5 py-3 text-md md:text-lg rounded-lg transition">
          <Info className="w-6 h-6" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
