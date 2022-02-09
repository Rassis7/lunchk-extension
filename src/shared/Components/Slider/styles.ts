import { styled } from "@/stitches.config";
import * as SliderPrimitive from "@radix-ui/react-slider";

export const StyledSlider = styled(SliderPrimitive.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  width: "12.5rem",

  '&[data-orientation="horizontal"]': {
    height: "1.3rem",
  },

  '&[data-orientation="vertical"]': {
    flexDirection: "column",
    width: "1.3rem",
    height: "6.25rem",
  },
});

export const StyledTrack = styled(SliderPrimitive.Track, {
  backgroundColor: "$purple200",
  position: "relative",
  flexGrow: 1,
  borderRadius: "9999px",

  '&[data-orientation="horizontal"]': { height: "0.18rem" },
  '&[data-orientation="vertical"]': { width: "0.18rem" },
});

export const StyledRange = styled(SliderPrimitive.Range, {
  position: "absolute",
  backgroundColor: "$purple700",
  borderRadius: "$medium",
  height: "100%",
});

export const StyledThumb = styled(SliderPrimitive.Thumb, {
  all: "unset",
  width: "1.5rem",
  height: "1.5rem",
  borderRadius: "$full",
  backgroundColor: "$purple700",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "$white",
  fontSize: "0.8rem",
});
