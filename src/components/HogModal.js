import React from "react";

const HogModal = ({ specialty, weight, greased, highestMedalAchieved }) => {
  return (
    <div className="hog-modal">
      <h1>Specialty: {specialty}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Is Greased: {greased ? "YES" : "NO"}</h3>
      <h3>{highestMedalAchieved}</h3>
    </div>
  );
};

export default HogModal;
