import { styled } from "@/stitches.config";
import { VFC } from "react";
import { HeadingProps } from "../types";

const StyledLabel = styled("label", {
  fontWeight: 400,
  color: "$gray900",
});

export const Label: VFC<HeadingProps> = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};
