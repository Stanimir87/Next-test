import styled from "styled-components";

import { SectionBigHeading, SectionSubheading, } from "~/components";

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledSubTitle = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
  color: black;
`;
export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
`;
