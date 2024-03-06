import { styled } from "@stitches/react";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "$s",
  marginTop: "$l",
  textAlign: "center",
});

export const Paragraph = styled("p", {
  color: "$gray400",
});

export const List = styled("ul", {
  "&>li": {
    "list-style-type": "none",
    color: "$gray400",
  },
  marginTop: "$m",
  marginBottom: "$m",
});

export const Space = styled("div", {
  marginTop: "$s",
});
