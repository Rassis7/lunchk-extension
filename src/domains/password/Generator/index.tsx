import { useCallback, useEffect, useState } from "react";
import { Button, Input, Slider, Text } from "@/shared/Components";
import { ActionsContainer, Container, PasswordContainer } from "./styles";

export const Generator = () => {
  const [password, setPassword] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<number[]>([8]);

  const handleGenerateRandomPassword = () => {
    const randomString = Math.random().toString(36).slice(-29);
    setPassword(randomString);
  };

  const handleValueSlider = useCallback(
    (value: number[]) => setSliderValue(value),
    [setSliderValue]
  );

  useEffect(() => handleGenerateRandomPassword(), []);

  return (
    <Container>
      <Text.h1>Gere uma senha segura!</Text.h1>
      <PasswordContainer>
        <Input type="text" value={password} disabled />
        <Button color="tertiary" radii="full">
          Copy
        </Button>
        <Button
          color="primary"
          radii="full"
          onClick={handleGenerateRandomPassword}
        >
          regenerate
        </Button>
      </PasswordContainer>

      <Slider
        defaultValue={sliderValue}
        max={50}
        min={8}
        onValueChange={handleValueSlider}
      />
      <ActionsContainer></ActionsContainer>
    </Container>
  );
};
