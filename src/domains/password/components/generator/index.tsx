import { useCallback, useContext, useEffect, useState } from "react";
import { Button, Text } from "@/shared/components";
import {
  AlertContainer,
  Container,
  PasswordBox,
  PasswordButtonsContainer,
  PasswordContainer,
} from "./styles";
import { Password } from "@/domains/password";
import { PasswordContext } from "@/domains/password/context";
import { Icons } from "@/shared/components";

export const Generator = () => {
  const [password, setPassword] = useState<string>("");
  const [hasCopied, setHasCopied] = useState(false);

  const {
    state: { hasNumber, hasSpecialChars, hasUpperCase, sliderValue },
  } = useContext(PasswordContext);

  const handleGenerateRandomPassword = useCallback(() => {
    const { value } = Password.getRandom({
      length: sliderValue,
      hasNumber,
      hasSpecialChars,
      hasUpperCase,
    });
    setPassword(value);
  }, [setPassword, sliderValue, hasNumber, hasSpecialChars, hasUpperCase]);

  const handleCopy = useCallback(() => {
    setHasCopied(true);
    navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    if (!sliderValue) return;

    handleGenerateRandomPassword();
  }, [sliderValue, hasNumber, hasSpecialChars, hasUpperCase]);

  return (
    <Container>
      <Text.h1>Gere uma senha segura!</Text.h1>

      <PasswordContainer>
        <PasswordBox>
          <p>{password}</p>
        </PasswordBox>

        <PasswordButtonsContainer>
          <Button
            color="tertiary"
            radii="full"
            title="Copiar a senha"
            onClick={handleCopy}
          >
            <Icons.Copy width={24} height={24} />
          </Button>
          <Button
            color="primary"
            radii="full"
            onClick={handleGenerateRandomPassword}
            title="Gerar nova senha"
          >
            <Icons.Reload width={24} height={24} />
          </Button>
        </PasswordButtonsContainer>

        {hasCopied && (
          <AlertContainer>
            <p>✅ Copiado com sucesso</p>
          </AlertContainer>
        )}
      </PasswordContainer>
    </Container>
  );
};
