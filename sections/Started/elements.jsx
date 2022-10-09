import styled from "styled-components";

import {
  SectionBigHeading,
  SectionSubheading,
  SectionParagraph,
  SectionInnerHeading,
  Card,
} from "~/components";



export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const StyledSubTitle = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
  color: black;
  display: flex;
  font-weight: 500;
  justify-content: center;
  margin-bottom: 60px;
`;
export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 30.03rem;
  max-height: 50rem;
  width: 100%;
  height: 100%;
  @media (max-width: 1024px) {
    margin-left: 0px;
    margin-bottom: 80px;
    max-width: 25.03rem;
    max-height: 45rem;
  }
`;

export const StyledSection = styled((props) => <section {...props} />)`
  max-width: 37rem;
  max-height: 65rem;
  margin-left: 70px;
  display: inline-flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    margin-left: 0px;
  }
`;

export const StyledSectionParagraph = styled((props) => (
  <SectionParagraph {...props} />
))`
  max-width: 23.03rem;
  max-height: 25rem;
  font-weight: 400;
  font-size: 1.2rem;
`;

export const StyledSectionTitle = styled((props) => (
  <SectionInnerHeading {...props} />
))`
  max-width: 23.03rem;
  max-height: 25rem;
  font-weight: 600;
  font-size: 1.35rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledCard = styled((props) => (
  <Card {...props} />))`
  :nth-child(1) {
    max-width: 28rem;
  }
  :nth-child(2) {
    max-width: 30.5rem;
  }
  :nth-child(3) {
    max-width: 33rem;
  }
  `
export const Background = styled.div`
  background-image: url("/img/background.png");
  height: 1000px;
  background-position-x: center;
  background-size: contain; ;
`;

export const StyledText = styled.div``;

export const StyledPic = styled.div`
  padding: 40px;
  padding-left: 46px;
`;
