import React, { useState } from "react";
import hogs from "../porkers_data";
import Nav from "./Nav";
import HogTiles from "./HogTiles";
import Filter from "./Filter";
import NewHogForm from "./NewHogForm";

function App() {
  const [filterGreasedHogs, setFilterGreasedHogs] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [hogList, setHogList] = useState(hogs);
  const filterByGreased = () => {
    setFilterGreasedHogs(() => !filterGreasedHogs);
  };
  const sortByNameOrWeight = (e) => {
    setSortBy(e.target.value);
  };

  const addHog = (newHog) => {
    setHogList([...hogList, newHog]);
  };

  const filteredHogs = hogList.filter((hog) => {
    if (!filterGreasedHogs) return true;
    else return hog.greased === filterGreasedHogs;
  });
  filteredHogs.sort((a, b) => a[sortBy] - b[sortBy]);

  return (
    <div className="App">
      <Nav />
      <Filter
        filterByGreased={filterByGreased}
        sortByNameOrWeight={sortByNameOrWeight}
      />
      <HogTiles hogs={filteredHogs} />
      <NewHogForm onAddHog={addHog} />
    </div>
  );
}

export default App;
