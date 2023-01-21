/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

interface IHeroBanner {
  bgImagePath?: any;
  children?: any;
  rest?: any;
}

const HeroBanner: FC<IHeroBanner> = ({ bgImagePath, children, ...rest }) => {
  const heroBannerStyles = css`
    &.hero-banner {
      background-color: #001e3c;
      background-image: url("${bgImagePath.src}");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      height: 90vh;
      // padding: 200px 0;
    }
  `;

  return (
    <div css={heroBannerStyles} className="hero-banner" {...rest}>
      {children}
    </div>
  );
};

export default HeroBanner;
