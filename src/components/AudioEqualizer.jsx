import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BiPointer } from "react-icons/bi";
import { FaRegHandPaper } from "react-icons/fa";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { GrUndo } from "react-icons/gr";
import { GrRedo } from "react-icons/gr";
import { BiShareAlt } from "react-icons/bi";

const AudioEqualizer = () => {
  return (
    <div className="p-10 flex justify-center">
      {/* Canvas */}
      <div className="border-2 border-black rounded-md w-[1000px] h-[500px]">
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
            <div className="flex items-center justify-between border-2 border-white w-[full] h-[10%] text-white">
              <div>
                <BiPointer size={20} color="white" className="h-5 w-5" />
              </div>
              <div>
                <FaRegHandPaper size={20} color="white" />
              </div>
              <div>
                <HiMagnifyingGlassPlus size={20} color="white" />
              </div>
              <div>
                <GrUndo size={20} color="white" />
              </div>
              <div>
                <GrRedo size={20} color="white" />
              </div>
              <div>
                <BiShareAlt size={20} color="white" />
              </div>
              <div className="flex">
                <button className="bg-blue-400 rounded-md px-3 h-[33px] text-black text-sm font-bold flex items-center justify-between">
                  <div className="pt-1 pr-1">
                    <AiOutlineDownload />
                  </div>
                  <p>Export</p>
                </button>
              </div>
            </div>

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
