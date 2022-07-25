import React, { useState } from "react";
import HogModal from "./HogModal";

const HogTile = ({ hog }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div onClick={handleModalOpen} className="hog-tile">
      <button
        className="hide-hog"
        onClick={(e) => {
          console.log(e.target.parentElement);
          e.target.parentElement.style.display = "none";
        }}
      >
        Hide Hog
      </button>
      <h1>{hog.name}</h1>

      <img src={hog.image} alt="Could not load" />
      {isModalOpen && (
        <HogModal
          specialty={hog.specialty}
          weight={hog.weight}
          greased={hog.greased}
          highestMedalAchieved={hog["highest medal achieved"]}
        />
      )}
    </div>
  );
};

export default HogTile;
