import { VFC } from "react";
import { styled } from "@stitches/react";
import { HeadingProps } from "../types";

export const StyledH3 = styled("h2", {
  fontWeight: 500,
  color: "$gray200",
  fontSize: "1.5rem",
});

export const H3: VFC<HeadingProps> = ({ children }) => (
  <StyledH3>{children}</StyledH3>
);
