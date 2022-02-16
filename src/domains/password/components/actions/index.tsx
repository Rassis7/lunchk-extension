import { Slider, Switch, Text } from "@/shared/components";
import { useCallback, useContext } from "react";
import { PasswordContext } from "@/domains/password/context";
import { ActionsContainer, FormItem, SwitchContainer } from "./styles";

export function Actions() {
  const {
    state: { hasNumber, hasSpecialChars, hasUpperCase, sliderValue },
    dispatch,
  } = useContext(PasswordContext);

  const handleValueSlider = useCallback(
    (value: number[]) =>
      dispatch({ type: "ADD_SLIDER_VALUE", value: value[0] }),
    [dispatch]
  );

  return (
    <ActionsContainer>
      <FormItem>
        <Text.label>Escolha o tamanho</Text.label>
        <Slider
          defaultValue={[sliderValue]}
          max={45}
          min={8}
          onValueChange={handleValueSlider}
        />
      </FormItem>

      <SwitchContainer>
        <Switch
          label="Números"
          defaultChecked={hasNumber}
          onCheckedChange={(value) => dispatch({ type: "HAS_NUMBER", value })}
        />
        <Switch
          label="Especiais"
          defaultChecked={hasSpecialChars}
          onCheckedChange={(value) =>
            dispatch({ type: "HAS_SPECIAL_CHARS", value })
          }
        />
        <Switch
          label="Maiúsculas"
          defaultChecked={hasUpperCase}
          onCheckedChange={(value) =>
            dispatch({ type: "HAS_UPPER_CASE", value })
          }
        />
      </SwitchContainer>
    </ActionsContainer>
  );
}
