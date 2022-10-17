import React from "react";
import PropTypes from "prop-types";
import AnimalDetail from "../AnimalDetail/AnimalDetail";
import Card from "../../Card/Card";
import "./AnimalCard.css";

export default function AnimalCard({ name, size, ...props }) {
  return (
    <Card title="Animal" details={<em>Mammal</em>}>
      <h3>{name}</h3>
      <div>{size} Kg</div>
      <AnimalDetail {...props} />
    </Card>
  );
}

AnimalCard.propTypes = {
  size: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
