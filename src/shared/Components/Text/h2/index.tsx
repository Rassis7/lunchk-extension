import { VFC } from "react";
import { styled } from "@stitches/react";
import { HeadingProps } from "../types";

const StyledH2 = styled("h2", {
  fontWeight: 600,
  color: "$gray400",
  fontSize: "2rem",
});

export const H2: VFC<HeadingProps> = ({ children }) => (
  <StyledH2>{children}</StyledH2>
);
