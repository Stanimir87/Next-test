import React from "react";
import {
  StyledSubTitle,
  StyledTitle,
  StyledImageContainer,
  StyledSection,
  StyledSectionParagraph,
  Flex,
  StyledSectionTitle,
  Card,
  Background,
  StyledPic,
  StyledText,
} from "./elements";
import Image from "next/image";
import { text } from "../../pages/started";
import NextLink from "next/link";

export const Started = (startedProps) => {
  return (
    <>
      <StyledTitle>{startedProps.title}</StyledTitle>
      <StyledSubTitle>{startedProps.subtitle}</StyledSubTitle>
      <Background>
      <Flex>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={startedProps.image.src}
            alt={startedProps.image.alt}
            width={startedProps.image.width}
            height={startedProps.image.height}
          ></Image>
        </StyledImageContainer>
        <StyledSection>
          {text.map((item, index) => (
            <Card key={index}>
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
                <StyledSectionTitle>{item.title}</StyledSectionTitle>
              </NextLink>
              <StyledSectionParagraph>{item.text}</StyledSectionParagraph>
              </StyledText>
            </Card>
          ))}
        </StyledSection>
      </Flex>
    </Background>
    </>
  );
};
