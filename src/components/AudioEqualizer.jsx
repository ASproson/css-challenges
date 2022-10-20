import React from "react";

const AudioEqualizer = () => {
  return (
    <div className="p-10 flex justify-center">
      {/* Canvas */}
      <div className="border-2 border-black rounded-md w-[800px] h-[500px]">
        {/* Inner Canvas */}
        <div className="bg-black h-full w-full"></div>
      </div>
    </div>
  );
};

export default AudioEqualizer;
