import styled from "styled-components";

import {
  SectionBigHeading,
  SectionSubheading,
  SectionParagraph,
} from "~/components";

import Image from 'next/image';

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  display: flex;
  align-items: center;
`;

export const StyledSubTitle = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
  color: black;
`;
export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: 400px;
`;

export const StyledSection = styled((props) => <section {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
`;

export const StyledSectionParagraph = styled((props) => <SectionParagraph {...props} />)`
  max-width: 23.03rem;
  max-height: 25rem;
  font-weight: 400;
  font-size: 14px;
`;

export const StyledSectionTitle = styled((props) => <SectionParagraph {...props} />)`
  max-width: 23.03rem;
  max-height: 25rem;
  font-weight: 600;
`;

export const Flex = styled.div`
    display: flex;
    flex: 2;
`
export const Card = styled.div`
    border-radius: 15px;
    padding: 20px;
    background-color: #F5F5F5;
`
export const Background = styled.div`
background-image: url('/img/background.png');
height: 1000px;
background-position-x: center;
`

