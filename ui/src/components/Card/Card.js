import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export default function Card({ children, title, details }) {
  return (
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>
        {details}
      </div>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  title: PropTypes.string.isRequired,
  details: PropTypes.element.isRequired,
};

Card.defaultProps = {
  details: null,
};
