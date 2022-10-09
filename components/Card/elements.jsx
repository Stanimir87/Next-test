import styled from "styled-components";
import { forwardRef } from "react";

export const StyledCard = styled((props) => <div {...props} />)`
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