import React from "react";

import "./Container.css";

function Container({
  type,
  isMaxContainer,
  isSectionContainer,
  isMaxWidth,
  isFlexDirection = false,
  withBackGround,
  withRootClassName,
  dataRole,
  children,
  closeMenuMobile,
}) {
  let className = null;
  if (type === "main") className = "home-main";
  if (type === "section") className = "section-container";
  if (type === "home") className = "home-container";
  if (type === "home-top") className = "home-top";
  if (type === "home-top-part") className = "home-top-part";
  if (type === "home-top-container") className = "home-top-container";
  if (type === "home-heading-container") className = "home-heading-container";
  if (type === "home-content") className = "home-container-content";
  if (type === "home-checklist") className = "home-container-checklist";
  if (type === "home-gallery") className = "home-gallery";
  if (type === "home-blog-container") className = "home-blog-container";
  if (type === "home-subscribe-container")
    className = "home-subscribe-container";
  if (type === "home-blog-cards-container")
    className = "home-blog-cards-container";
  if (type === "home-gallery-container-left")
    className = "home-gallery-container-left";
  if (type === "home-gallery-container-middle")
    className = "home-gallery-container-middle";
  if (type === "home-gallery-container-right")
    className = "home-gallery-container-right";
  if (type === "home-gallery-container-bottom-right")
    className = "home-gallery-container-bottom-right";
  if (type === "home-links-container") className = "home-links-container";
  if (type === "home-links-items-container")
    className = "home-links-items-container";
  if (type === "blog-card-container") className = "blog-card-container";
  if (type === "blog-card-container-info")
    className = "blog-card-container-info";
  if (type === "banner") className = "home-banner";
  if (type === "header") className = "navigation-header";
  if (type === "event-card-container") className = "event-card-container";
  if (type === "event-card-vertical-line")
    className = "event-card-vertical-line";
  if (type === "event-card-information") className = "event-card-information";
  if (type === "aboutme") className = "aboutme";
  if (type === "contactme") className = "contactme";
  if (type === "getintouch") className = "getintouch";
  if (type === "image-container") className = "image-container";
  if (type === "our-process-container") className = "our-process-container";
  if (type === "our-process-step") className = "our-process-step";
  if (type === "our-process-step-number") className = "our-process-step-number";
  if (type === "our-process-step-container")
    className = "our-process-step-container";
  if (type === "our-services") className = "our-services";
  if (type === "our-services-container") className = "our-services-container";
  if (type === "our-services-cards-container")
    className = "our-services-cards-container";
  if (type === "our-services-header-container")
    className = "our-services-header-container";
  if (type === "our-services-controls") className = "our-services-controls";
  if (type === "portfolio") className = "portfolio";
  if (type === "portfolio-card") className = "portfolio-card";
  if (type === "portfolio-card-image-container")
    className = "portfolio-card-image-container";
  if (type === "portfolio-card-project-container")
    className = "portfolio-card-project-container";
  if (type === "portfolio-tab-selector-cards-container")
    className = "portfolio-tab-selector-cards-container";
  if (type === "portfolio-tab-selector")
    className = "portfolio-tab-selector-header";
  if (type === "mobile")
    className = `mobile-menu ${!closeMenuMobile ? "teleport-show" : ""}`;
  if (type === "mobile-nav") className = "mobile-menu-nav";
  if (type === "mobile-nav-container") className = "mobile-menu-nav-container";
  if (type === "mobile-nav-close") className = "mobile-menu-nav-close";
  if (type === "copyright" && !isMaxWidth) className = "copyright-copyright";
  if (type === "copyright" && isMaxWidth) className = "copyright-max-width";
  if (type === "navigation" && !isMaxWidth) className = "navigation-nav";
  if (type === "navigation" && isMaxWidth) className = "navigation-max-width";
  if (type === "footer") className = "footer-container";
  if (type === "footer-background") className = "footer-background";
  if (type === "footer-container-column") className = "footer-container-column";
  if (type === "footer-bottom-container") className = "footer-bottom-container";
  if (type === "footer-social-media") className = "footer-social-media";
  if (type === "footer-left-side") className = "footer-left-side";
  if (type === "footer-icon-container") className = "footer-icon-container";
  if (type === "footer-links") className = "footer-links";
  if (type === "footer-links-container") className = "footer-links-container";
  if (type === "footer-copyright") className = "footer-copyright";
  if (type === "not-found") className = "not-found-container";
  if (type === "not-found-error-container")
    className = "not-found-error-container";
  if (type === "not-found-error-container-message")
    className = "not-found-error-container-message";

  if (withBackGround) className = `${className}-background-color-lightbrown`;
  if (isMaxContainer) className = `${className} max-content-container`;
  if (isSectionContainer) className = `${className} section-container`;
  if (isFlexDirection) className = `${className}-container`;
  if (withRootClassName) className = `${className} ${withRootClassName}`;

  let container = null;
  if (type === "main")
    container = <main className={className}>{children}</main>;
  if (type === "header")
    container = (
      <header data-role={dataRole} className={className}>
        {children}
      </header>
    );
  if (type === "footer")
    container = <footer className={className}>{children}</footer>;
  else
    container = (
      <div data-role={dataRole} className={className}>
        {children}
      </div>
    );

  return container;
}

export default Container;
