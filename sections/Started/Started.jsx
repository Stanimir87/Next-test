import React from "react";
import {
  StyledSubTitle,
  StyledTitle,
  StyledImageContainer,
  StyledSection,
  StyledSectionParagraph,
  Flex,
  StyledSectionTitle,
  StyledCard,
  Background,
  StyledPic,
  StyledText,
} from "./elements";
import Image from "next/image";
import NextLink from "next/link";

export const Started = ({title, subtitle, image, text}) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubTitle>{subtitle}</StyledSubTitle>
      <Background>
      <Flex>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          ></Image>
        </StyledImageContainer>
        <StyledSection>
          {text.map((item, index) => (
            <StyledCard key={index}>
              <StyledPic>
                {" "}
                <Image
                  src={item.icon}
                  alt=""
                  layout="fixed"
                  width={item.icon.width}
                  height={item.icon.height}
                />
              </StyledPic>
              <StyledText>
              <NextLink href="/">
                <StyledSectionTitle>{item.cardTitle}</StyledSectionTitle>
              </NextLink>
              <StyledSectionParagraph>{item.text}</StyledSectionParagraph>
              </StyledText>
            </StyledCard>
          ))}
        </StyledSection>
      </Flex>
    </Background>
    </>
  );
};
