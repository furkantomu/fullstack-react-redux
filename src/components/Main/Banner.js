import React from "react";

import { Button, Container } from "../../globalStyle";
import {
  BannerCol,
  BannerHero,
  BannerRow,
  Heading,
  Img,
  ImgWrapper,
  SubTitle,
  TextWrapper,
  TopLine,
  BannerLink,
} from "./Banner.elements";

const Banner = ({
  topLine,
  lightbg,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  start
}) => {
  return (
    <BannerHero lightbg={lightbg}>
      <Container>
        <BannerRow>
        <BannerCol>
            <ImgWrapper start={start}>
              <Img src={img} />
            </ImgWrapper>
          </BannerCol>
          <BannerCol>
            <TextWrapper>
              <TopLine lightTopLine={false}>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <SubTitle lightTextDesc={false}>{description}</SubTitle>
              <BannerLink to="/shop"><Button black style={{ marginTop: 20 }}>SHOP NOW!</Button></BannerLink>
            </TextWrapper>
          </BannerCol>
         
        </BannerRow>
      </Container>
    </BannerHero>
  );
};

export default Banner;
