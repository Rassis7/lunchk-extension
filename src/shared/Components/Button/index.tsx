import type * as Stitches from "@stitches/react";
import { ReactNode, HtmlHTMLAttributes, VFC, memo } from "react";
import { StyledButton } from "./styles";

type ButtonType = Stitches.VariantProps<typeof StyledButton> &
  Omit<HtmlHTMLAttributes<HTMLButtonElement>, "color"> & {
    children: ReactNode;
  };

export const Button: VFC<ButtonType> = memo(({ children, color, ...rest }) => (
  <StyledButton {...rest} color={color}>
    {children}
  </StyledButton>
));
