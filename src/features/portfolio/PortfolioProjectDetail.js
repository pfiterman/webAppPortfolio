/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

import { VscGithub } from "react-icons/vsc";
import {
  LuCalendar,
  LuCalendarCheck,
  LuLaptopMinimalCheck,
} from "react-icons/lu";

import { format } from "date-fns";
import {
  TbDeviceDesktopCheck,
  TbDeviceMobileCheck,
  TbDeviceTabletCheck,
} from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import Details from "../../ui/Details";

function PortfolioProjectDetail({
  description,
  gitHubURL,
  isResponsive,
  dateStart,
  dateEnd,
}) {
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
    <Details description={description} withMarginTwoUnits={true}>
      {showStartDate}
      {showEndDate}
      {showDesignedFor}
      {showGitHubURL}
    </Details>
  );
}

export default PortfolioProjectDetail;
