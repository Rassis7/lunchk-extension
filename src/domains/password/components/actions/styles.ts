import { styled } from "@/stitches.config";

export const ActionsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "$s",

  "&>p": {
    textAlign: "center",
    marginBottom: "$m",
    fontWeight: 600,
    color: "$gray400",
    fontSize: "2rem",
  },
});

export const FormItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$m",
  textAlign: "start",
  width: "100%",
});

export const SwitchContainer = styled("div", {
  display: "flex",
  gap: "$m",
});
