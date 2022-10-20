import React from "react";

const AudioEqualizer = () => {
  return (
    <div className="p-10 flex justify-center">
      {/* Canvas */}
      <div className="border-2 border-black rounded-md w-[800px] h-[500px]">
        {/* Inner Canvas */}
        <div className="bg-black h-full w-full flex">
          {/* Left bar */}
          <div className="border-2 border-white w-[10%] h-full">
            {/* Logo */}
            <div className="border-2 border-white w-[full] h-[8%]"></div>
            {/* Icons */}
            <div className="border-2 border-white w-[full] h-[45%] mt-16"></div>
            {/* Mode Switch */}
            <div className="border-2 border-white w-[full] h-[10%] mt-10"></div>
            {/* User Avatar */}
            <div className="border-2 border-white w-[full] h-full"></div>
          </div>

          {/* Top Container */}
          <div className="border-2 border-white w-[60%] h-full">
            {/* Top Bar */}
            <div className="border-2 border-white w-[full] h-[10%]"></div>
            {/* Visualizer */}
            <div className="border-2 border-white w-[full] h-[40%]"></div>
            {/* Timeline */}
            <div className="border-2 border-white w-[full] h-[10%]"></div>
            {/* Playback */}
            <div className="border-2 border-white w-[full] h-[25%]"></div>
            {/* Controls */}
            <div className="border-2 border-white w-[full]"></div>
          </div>

          {/* Right bar */}
          <div className="border-2 border-white w-[30%] h-full">
            {/* Mode / Power */}
            <div className="border-2 border-white w-[full] h-[12%]"></div>
            {/* Connection */}
            <div className="border-2 border-white w-[full] h-[15%]"></div>
            {/* Levels */}
            <div className="border-2 border-white w-[full] h-[20%]"></div>
            {/* Noise Controls */}
            <div className="border-2 border-white w-[full] h-[25%]"></div>
            {/* Equalizer */}
            <div className="border-2 border-white w-[full] h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioEqualizer;
