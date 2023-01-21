/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Col, Row, Typography } from "antd";
import Container from "../share/Container";

const { Title } = Typography;

const HeroArea = () => {
  return (
    <div css={heroAreaStyles} className="hero-area-wrapper">
      <Container>
        <div>
          <Row>
            <Col lg={12}>
              <div className="hero-area-content">
                <Title className="heading"> I&apos;M PRANTO SHIKDER</Title>
              </div>
            </Col>

            <Col lg={12}>
              <div></div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

const heroAreaStyles = css`
  &.hero-area-wrapper {
    .hero-area-content {
      .heading {
        font-weight: 700;
        font-size: 60px;
        line-height: 60px;
        background: linear-gradient(93.24deg, #ffffff 0.65%, #fcbf01 100.25%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-family: "Poppins", sans-serif;
      }
    }
  }
`;

export default HeroArea;
