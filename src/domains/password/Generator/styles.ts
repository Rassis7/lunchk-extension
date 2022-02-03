import { styled } from "@/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "$m",
  gap: "1rem",
});

export const PasswordContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0.2rem",
});
