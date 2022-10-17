import React from "react";
import AnimalCard from "../Demo/AnimalCard/AnimalCard";
import data from "../Demo/data";

function App() {
  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {data.map((animal) => (
        <AnimalCard
          key={animal.name}
          name={animal.name}
          diet={animal.diet}
          size={animal.size}
          scientificName={animal.scientificName}
        />
      ))}
    </div>
  );
}

export default App;
