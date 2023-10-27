import React, { useState } from "react";

const   VolumeControl = (props) => {
  const [volume, setVolume] = useState(10 ); // Initial volume level

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
  };

  return (
    <div>
      <input
        type="range"
        id="volumeRange"
        min="0"
        max="100"
        step="1"
        value={volume}
        onChange={handleVolumeChange}
        style={props}
      />
    </div>
  );
};

export default VolumeControl;
