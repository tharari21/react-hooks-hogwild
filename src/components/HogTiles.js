import React from "react";
import HogTile from "./HogTile";

const HogTiles = ({ hogs }) => {
  return (
    <div className="ui grid container" id="hog-tiles">
      {hogs.map((hog) => (
        <HogTile key={hog.name} hog={hog} />
      ))}
    </div>
  );
};

export default HogTiles;
