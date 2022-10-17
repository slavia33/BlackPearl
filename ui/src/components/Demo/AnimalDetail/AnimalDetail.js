import PropTypes from "prop-types";
import "./AnimalDetail.css";

function convertFood(food) {
  switch (food) {
    case "insects":
      return "🐜";
    case "meat":
      return "🍖";
    case "plants":
    default:
      return "🌱";
  }
}

export default function AnimalDetail({ diet, scientificName }) {
  return (
    <div className="details">
      <h4>Details </h4>
      <div>call it - {scientificName}.</div>
      <div>feed it - {diet.map((food) => convertFood(food)).join("|| ")}</div>
    </div>
  );
}

AnimalDetail.prototype = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  scientificName: PropTypes.string.isRequired,
};
