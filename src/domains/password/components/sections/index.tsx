import { Text } from "@/shared/components";
import { Container, Paragraph, List, Space } from "./styles";

export const Sections = () => {
  return (
    <Container>
      <Text.h2>Crie Senhas Seguras Online</Text.h2>
      <Paragraph>
        Bem-vindo ao Gerador de Senha, sua ferramenta online para criar senhas
        robustas e seguras.
      </Paragraph>
      <Space />
      <Paragraph>Com o Gerador de Senha, você pode:</Paragraph>
      <List>
        <li>Gerar senhas aleatórias com alta complexidade.</li>
        <li>
          Definir o comprimento das senhas conforme suas necessidades de
          segurança.
        </li>
        <li>
          Escolher os caracteres incluídos nas senhas, como letras maiúsculas,
          minúsculas, números e símbolos.
        </li>
        <li>
          Garantir a segurança das suas contas online usando senhas únicas e
          difíceis de adivinhar.
        </li>
      </List>
      <Paragraph>
        Nossa ferramenta é simples de usar e gratuita. Não requer registro ou
        download.
      </Paragraph>
      <Paragraph>
        Comece a proteger suas contas online agora mesmo com o Gerador de Senha!
      </Paragraph>
    </Container>
  );
};
