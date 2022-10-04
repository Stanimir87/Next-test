import React from "react";
import { StyledSubTitle, StyledTitle, StyledImageContainer } from "./elements";
import Image from "next/image";

export const Started = (startedProps) => {
  return (
    <>
      <StyledTitle>{startedProps.title}</StyledTitle>
      <StyledSubTitle>{startedProps.subtitle}</StyledSubTitle>
      <StyledImageContainer>
      <Image
        layout="responsive"
        src={startedProps.image.src}
        alt={startedProps.image.alt}
        width={startedProps.image.width}
        height={startedProps.image.height}
      ></Image>
      </StyledImageContainer>
    </>
  );
};
