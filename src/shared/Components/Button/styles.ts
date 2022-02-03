import { styled, cssColorsVariants } from "@/stitches.config";

export const StyledButton = styled(
  "button",
  {
    padding: "$s",
    borderRadius: "$small",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
  {
    variants: {
      ...cssColorsVariants,
      radii: {
        full: {
          borderRadius: "$full",
        },
        medium: {
          borderRadius: "$medium",
        },
        small: {
          borderRadius: "$small",
        },
      },
    },
  }
);
