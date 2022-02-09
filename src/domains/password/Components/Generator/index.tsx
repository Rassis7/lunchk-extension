import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Button, Input, Slider, Switch, Text } from "@/shared/Components";
import {
  ActionsContainer,
  Container,
  FormItem,
  PasswordButtonsContainer,
  PasswordContainer,
  SwitchContainer,
} from "./styles";
import { Password } from "@/domains/password";

export const Generator = () => {
  const [password, setPassword] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<number[]>([15]);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChars, setHasSpecialChars] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);

  const handleGenerateRandomPassword = useCallback(() => {
    const { value } = Password.getRandom({
      length: sliderValue[0],
      hasNumber,
      hasSpecialChars,
      hasUpperCase,
    });
    setPassword(value);
  }, [setPassword, sliderValue, hasNumber, hasSpecialChars, hasUpperCase]);

  const handleValueSlider = useCallback(
    (value: number[]) => setSliderValue(value),
    [setSliderValue]
  );

  const handleSwitchValue = (
    fn: Dispatch<SetStateAction<boolean>>,
    value: boolean
  ) => fn(value);

  useEffect(() => {
    if (!sliderValue) return;

    handleGenerateRandomPassword();
  }, [sliderValue, hasNumber, hasSpecialChars, hasUpperCase]);

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
            max={42}
            min={8}
            onValueChange={handleValueSlider}
          />
        </FormItem>

        <SwitchContainer>
          <Switch
            label="Números"
            defaultChecked={hasNumber}
            onCheckedChange={(value) => handleSwitchValue(setHasNumber, value)}
          />
          <Switch
            label="Especiais"
            defaultChecked={hasSpecialChars}
            onCheckedChange={(value) =>
              handleSwitchValue(setHasSpecialChars, value)
            }
          />
          <Switch
            label="Maiúsculas"
            defaultChecked={hasUpperCase}
            onCheckedChange={(value) =>
              handleSwitchValue(setHasUpperCase, value)
            }
          />
        </SwitchContainer>
      </ActionsContainer>
    </Container>
  );
};
