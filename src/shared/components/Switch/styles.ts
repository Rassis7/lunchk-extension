import { styled } from "@/stitches.config";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: "unset",
  width: "2.6rem",
  height: "1.5rem",
  backgroundColor: "$primary",
  borderRadius: "$extraLarger",
  position: "relative",
  boxShadow: `0 2px 10px $green500`,
  WebkitTapHighlightColor: "$green500",
  '&[data-state="checked"]': { backgroundColor: "$green700" },
});

export const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: "block",
  width: 21,
  height: 21,
  backgroundColor: "$white",
  borderRadius: "9999px",
  boxShadow: `0 2px 2px $secondary`,
  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  '&[data-state="checked"]': { transform: "translateX(19px)" },
});

export const Label = styled("label", {
  color: "$gray900",
  fontSize: "0.95rem",
  lineHeight: 1,
  userSelect: "none",
  paddingRight: "1rem",
});

export const Flex = styled("div", {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  gap: "$xs",
});
