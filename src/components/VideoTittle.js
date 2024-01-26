import React from "react";

const VideoTittle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%]  px-32  absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold my-5">{title}</h1>
      <p className="py-6b text-lg w-1/4 my-6">{overview}</p>

      <div>
        <button className="bg-white text-black p-4   px-10 text-lg bg-opacity-50 rounded-lg">
          ▶️ Play
        </button>

        <button className="bg-white text-black p-4 mx-2 my-2 px-10 text-lg bg-opacity-50 rounded-lg">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTittle;
