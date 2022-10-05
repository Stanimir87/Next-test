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
  Background
} from "./elements";
import Image from "next/image";
import { text } from "../../pages/started";

export const Started = (startedProps) => {
  return (
    <Background>
      <StyledTitle>{startedProps.title}</StyledTitle>
      <StyledSubTitle>{startedProps.subtitle}</StyledSubTitle>
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
            <StyledSectionTitle>{item.title}</StyledSectionTitle>
            <StyledSectionParagraph >
              {item.text}
            </StyledSectionParagraph>
            </Card>
          ))}
        </StyledSection>
      </Flex>
    </Background>
  );
};
