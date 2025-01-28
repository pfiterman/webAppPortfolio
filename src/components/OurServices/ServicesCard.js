import React from "react";

import PropTypes from "prop-types";

import "./ServicesCard.css";

const ServicesCard = (props) => {
  return (
    <div className="services-card">
      <div className="services-card-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="services-card-image"
        />
      </div>
      <span className="services-card-text">{props.text}</span>
      <span className="services-card-text1">{props.text1}</span>
      <span className="services-card-text2">{props.text2}</span>
    </div>
  );
};

ServicesCard.defaultProps = {
  imageAlt: "image",
  imageSrc: "/website-200h.png",
  text: "Website design",
  text1:
    "Create your ubest unique App development, crafted for your business needs.",
  text2: "Learn more",
};

ServicesCard.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

export default ServicesCard;
