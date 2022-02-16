import { VFC } from "react";
import { styled } from "@stitches/react";
import { HeadingProps } from "../types";

const StyledH1 = styled("h1", {
  fontWeight: 700,
  color: "$gray400",
  fontSize: "2.5rem",
});

export const H1: VFC<HeadingProps> = ({ children }) => (
  <StyledH1>{children}</StyledH1>
);
