import { Actions, Generator, Sections } from "../components";
import { PasswordContextProvider } from "../context";
import { Container } from "./styles";

export const Password = () => {
  return (
    <PasswordContextProvider>
      <Container>
        <Generator />
        <Actions />
        <Sections />
      </Container>
    </PasswordContextProvider>
  );
};
