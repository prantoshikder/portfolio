/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import HeaderLogo from "@/assets/logo/logo-img.png";
import { Button, Space } from "antd";
import Image from "next/image";
import Link from "next/link";

const DesktopMenu = () => {
  const menuItems = [
    { id: 1, menu: "About Us", link: "/about-us" },
    { id: 1, menu: "Portfolio", link: "/portfolio" },
    { id: 1, menu: "Experience", link: "/experience" },
    { id: 1, menu: "Blog", link: "/blog" },
    { id: 1, menu: "Contact", link: "/contact" },
  ];
  return (
    <div
      css={desktopMenuStyles}
      className="desktop-menu-wrapper flex content-between items-center"
    >
      <div className="header-logo">
        <Image src={HeaderLogo} alt="Navbar Logo" className="logo" />
      </div>

      <div className="menu-items-wrapper flex items-center">
        <Space size={20}>
          {menuItems?.length > 0 &&
            menuItems.map((menuItem: any) => (
              <Link
                className="menu-item"
                key={menuItem?.id}
                href={`${menuItem?.link}`}
              >
                {menuItem?.menu}
              </Link>
            ))}

          <Button type="primary" className="primary-btn">
            Resume
          </Button>
        </Space>
      </div>
    </div>
  );
};

const desktopMenuStyles = css`
  &.desktop-menu-wrapper {
    .header-logo {
      .logo {
        width: 100%;
        height: 30px;
      }
    }

    .menu-items-wrapper {
      .menu-item {
        color: #fff;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
`;

export default DesktopMenu;
