import { memo, VFC } from "react";
import { Flex, Label, StyledSwitch, StyledThumb } from "./styles";
import * as SwitchPrimitive from "@radix-ui/react-switch";

type SwitchProps = {
  label: string;
} & SwitchPrimitive.SwitchProps;

export const Switch: VFC<SwitchProps> = memo(({ label, ...rest }) => {
  return (
    <Flex css={{ alignItems: "center" }}>
      <Label htmlFor="s1">{label}</Label>
      <StyledSwitch {...rest} id="s1">
        <StyledThumb />
      </StyledSwitch>
    </Flex>
  );
});
