/* eslint-disable react/prop-types */
import React from "react";

import { HiHome, HiChatBubbleLeftEllipsis, HiLightBulb } from "react-icons/hi2";

import NavigationLink from "./NavigationLink";

import "./NavigationLinks.css";

function NavigationLinks({ onClick }) {
  return (
    <nav className="navigation-links-nav navigation-links-margin-right">
      <NavigationLink
        icon={<HiHome />}
        itemName="Home"
        itemURL="/"
        onClick={onClick}
      />
      <NavigationLink
        icon={<HiChatBubbleLeftEllipsis />}
        itemName="About Me"
        itemURL="/aboutme"
        onClick={onClick}
      />
      <NavigationLink
        icon={<HiLightBulb />}
        itemName="Portfolio"
        itemURL="/portfolio"
        onClick={onClick}
      />
    </nav>
  );
}

export default NavigationLinks;
