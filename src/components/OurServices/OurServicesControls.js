import React from "react";

import Container from "../../ui/Container";
import Button from "../../ui/Button";
import Image from "../../ui/Image";

function OurServicesControls() {
  return (
    <Container type="our-services-controls">
      <Button className="control-btn">
        <Image type="svg" viewBox="0 0 1024 1024" className="our-services-icon">
          <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
        </Image>
      </Button>
      <Button className="control-btn">
        <Image type="svg" viewBox="0 0 1024 1024" className="our-services-icon">
          <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
        </Image>
      </Button>
    </Container>
  );
}

export default OurServicesControls;
