import { Generator } from "@/domains/password";
import { QrCode, H1 } from "@/shared/Components";
import { globalStyles } from "@/stitches.config";
import { Container } from "./styles";

export const Home = () => {
  globalStyles();
  return (
    <Container>
      <H1>Ola caralhas</H1>
      <QrCode code="32fe2520-82ff-11ec-a8a3-0242ac120002" />

      <Generator />
    </Container>
  );
};
