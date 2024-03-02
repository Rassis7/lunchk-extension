import { styled } from "@/stitches.config";
import LottieComponent from "lottie-react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "$l",
  gap: "$m",
  width: "100%",
  marginBottom: "$l",
});

export const PasswordContainer = styled("div", {
  padding: "$m",
  backgroundColor: "$white",
  borderRadius: "$small",
  width: "100%",
  overflow: "hidden",
});

export const PasswordBox = styled("div", {
  "&>h2": {
    whiteSpace: "nowrap",
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "2rem",
  },
});

export const PasswordButtonsContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  marginTop: "$s",
});

export const AlertContainer = styled("div", {
  color: "$gray200",
  padding: "$m",
  marginTop: "$s",
  marginBottom: "$s",
});
