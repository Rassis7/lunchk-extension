import { useEffect, useState } from "react";
import { Button, H1, Input } from "@/shared/Components";
import { Container, PasswordContainer } from "./styles";

export const Generator = () => {
  const [password, setPassword] = useState<string>("");

  const handleGenerateRandomPassword = () => {
    const randomString = Math.random().toString(36).slice(-29);
    setPassword(randomString);
  };

  useEffect(() => handleGenerateRandomPassword(), []);

  return (
    <Container>
      <PasswordContainer>
        <H1>{password}</H1>
        <Button color="tertiary" radii="full">
          C!
        </Button>
        <Button
          color="primary"
          radii="full"
          onClick={handleGenerateRandomPassword}
        >
          G!
        </Button>
      </PasswordContainer>
    </Container>
  );
};
