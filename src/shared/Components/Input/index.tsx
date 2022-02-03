import { VariantProps } from "@stitches/react";
import { InputHTMLAttributes, VFC } from "react";
import { StyledInput } from "./styles";

type VariantsType = VariantProps<typeof StyledInput>;
type InputType = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

type InputProps = VariantsType &
  InputType & {
    type: "email" | "number" | "password" | "search" | "tel" | "text" | "url";
  };

export const Input: VFC<InputProps> = ({ variant, disabled, ...rest }) => {
  return (
    <StyledInput
      disabled={disabled}
      {...rest}
      variant={disabled ? "disabled" : variant}
    />
  );
};
