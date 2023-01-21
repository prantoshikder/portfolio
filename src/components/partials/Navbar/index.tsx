/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Container from "../../share/Container";
import useMediaQuery from "../../share/UseMediaQuery/useMediaQuery";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const isMobileView: any = useMediaQuery("(max-width: 768px)");

  return (
    <div css={navbarStyles} className="menu-wrapper">
      <Container>{isMobileView ? <MobileMenu /> : <DesktopMenu />}</Container>
    </div>
  );
};

const navbarStyles = css`
  &.menu-wrapper {
    background-color: #001e3c;
    padding: 15px 0;
    // height: 70px;
  }
`;

export default Navbar;
