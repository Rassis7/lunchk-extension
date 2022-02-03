import { styled } from "@/stitches.config";

export const StyledInput = styled(
  "input",
  {
    padding: "$s",
    border: "none",
    borderRadius: "$medium",
    color: "$gray200",
    "&:focus": {
      outlineColor: "$primary",
    },
  },
  {
    variants: {
      variant: {
        secondary: {
          border: "none",
          borderColor: "$red500",
          "&:focus": {
            outlineColor: "$secondary",
          },
        },
        error: {
          border: "solid",
          borderColor: "$red500",
          "&:focus": {
            outline: "none",
          },
        },
        warning: {
          border: "solid",
          borderColor: "$orange500",
          "&:focus": {
            outline: "none",
          },
        },
        info: {
          border: "solid",
          borderColor: "$blue200",
          "&:focus": {
            outline: "none",
          },
        },
        disabled: {
          backgroundColor: "$gray200",
          color: "$white",
          "&:hover": {
            cursor: "not-allowed",
          },
        },
      },
    },
  }
);
