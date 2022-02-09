import { useCallback, useEffect, useState } from "react";
import { Button, Input, Slider, Text } from "@/shared/Components";
import {
  ActionsContainer,
  Container,
  FormItem,
  PasswordButtonsContainer,
  PasswordContainer,
} from "./styles";
import { Password } from "@/domains/password";

export const Generator = () => {
  const [password, setPassword] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<number[]>([8]);

  const handleGenerateRandomPassword = useCallback(() => {
    const { value } = Password.getRandom({
      length: sliderValue[0],
    });
    setPassword(value);
  }, [setPassword, sliderValue]);

  const handleValueSlider = useCallback(
    (value: number[]) => setSliderValue(value),
    [setSliderValue]
  );

  useEffect(() => {
    if (!sliderValue) return;

    handleGenerateRandomPassword();
  }, [sliderValue]);

  return (
    <Container>
      <Text.h1>Gere uma senha segura!</Text.h1>

      <PasswordContainer>
        <Text.h3>{password}</Text.h3>

        <PasswordButtonsContainer>
          <Button color="tertiary" radii="full">
            C
          </Button>
          <Button
            color="primary"
            radii="full"
            onClick={handleGenerateRandomPassword}
          >
            R
          </Button>
        </PasswordButtonsContainer>
      </PasswordContainer>

      <Text.h2>Personalize a sua senha</Text.h2>

      <ActionsContainer>
        <FormItem>
          <Text.label>Escolha o tamanho</Text.label>
          <Slider
            defaultValue={sliderValue}
            max={50}
            min={8}
            onValueChange={handleValueSlider}
          />
        </FormItem>
      </ActionsContainer>
    </Container>
  );
};
