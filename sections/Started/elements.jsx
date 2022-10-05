import styled from "styled-components";

import {
  SectionBigHeading,
  SectionSubheading,
  SectionParagraph,
  SectionInnerHeading,
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
  margin-bottom: 300px;
  @media (max-width: 1024px) {
    margin-left: 0px;
    margin-bottom: 0px;
  }
`;

export const StyledSection = styled((props) => <section {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  margin-left: 70px;
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
export const Card = styled.div`
  border-radius: 15px;
  border-style: solid;
  border-width: 5px;
  border-color: white;
  padding: 20px;
  background-color: #f5f5f5;
  margin-top: 20px;
  display: flex;
  flex: 1;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;

  &:hover {
    border-color: blue;
    h4 {
      color: blue;
      text-decoration: underline;
    }
  }

  @media (max-width: 1024px) {
    margin-left: 0px;
  }
`;
export const Background = styled.div`
  background-image: url("/img/background.png");
  height: 1000px;
  background-position-x: center;
  background-size: contain; ;
`;

export const StyledText = styled.div``;

export const StyledPic = styled.div`
  padding: 40px;
  padding-left: 20px;
`;
