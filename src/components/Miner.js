import React, { useState } from "react";
import Image from "next/image";

const Miner = ({ onMine }) => {
  const [clicks, setClicks] = useState(0);

  const handleMine = () => {
    setClicks(clicks + 1);
    onMine();
  };

  return (
    <div className="text-center">
      <Image
        src="/gorilla.jpg"
        alt="Mining Gorilla"
        width={300}
        height={300}
        onClick={handleMine}
        className="cursor-pointer"
      />
      <p className="mt-4 text-lg">Clicks: {clicks}</p>
    </div>
  );
};

export default Miner;