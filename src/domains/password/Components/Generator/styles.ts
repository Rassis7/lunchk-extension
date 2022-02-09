import { styled } from "@/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "$m",
  gap: "$m",
});

export const PasswordContainer = styled("div", {
  padding: "$m",
  backgroundColor: "$white",
  borderRadius: "$small",
  width: "96vw",
  overflow: "hidden",
});

export const PasswordButtonsContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  marginTop: "$s",
});

export const ActionsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "70vw",
});

export const FormItem = styled("div", {
  padding: "$s",
  display: "flex",
  flexDirection: "column",
  gap: "$m",
  textAlign: "start",
  width: "100%",
});
