/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";
import { format } from "date-fns";

import { VscGithub } from "react-icons/vsc";
import { LuCalendar, LuCalendarCheck } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import {
  TbDeviceMobileCheck,
  TbDeviceTabletCheck,
  TbDeviceDesktopCheck,
} from "react-icons/tb";
import { LuLaptopMinimalCheck } from "react-icons/lu";

import "./Details.css";

function Details({ description, gitHubURL, dateStart, dateEnd, isResponsive }) {
  const showGitHubURL = gitHubURL && (
    <p className="details-text">
      <VscGithub />
      <NavLink to={gitHubURL} target="_blank">
        GitHub repository
      </NavLink>
    </p>
  );

  const showStartDate = dateStart && (
    <p className="details-text">
      <LuCalendar /> Start Date: {format(dateStart, "EEE, MMM dd yyyy")}
    </p>
  );

  const showEndDate = dateEnd && (
    <p className="details-text">
      <LuCalendarCheck /> End Date: {format(dateEnd, "EEE, MMM dd yyyy")}
    </p>
  );

  const betterResolution = isResponsive ? (
    <>
      <TbDeviceMobileCheck />
      <TbDeviceTabletCheck />
      <TbDeviceDesktopCheck />
      <LuLaptopMinimalCheck />
    </>
  ) : (
    <>
      <TbDeviceDesktopCheck />
      <LuLaptopMinimalCheck />
    </>
  );

  const showDesignedFor = (
    <p className="details-text">
      <FaEye className="icon" /> Designed for: {betterResolution}
    </p>
  );

  return (
    <div className="details-container">
      <p className="details-description with-margin-bottom">{description}</p>
      {showStartDate}
      {showEndDate}
      {showDesignedFor}
      {showGitHubURL}
    </div>
  );
}

export default Details;
