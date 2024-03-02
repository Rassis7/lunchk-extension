import { styled } from "@/stitches.config";

export const ActionsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "$s",

  "&>h2": {
    textAlign: "center",
    marginBottom: "$m",
  },
});

export const FormItem = styled("div", {
  padding: "$s",
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
