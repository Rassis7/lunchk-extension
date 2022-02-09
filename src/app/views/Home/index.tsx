import { Generator } from "@/domains/password";
import { QrCode, Text } from "@/shared/Components";
import { globalStyles } from "@/stitches.config";
import { Container } from "./styles";

export const Home = () => {
  globalStyles();
  return (
    <Container>
      {/* <QrCode code="32fe2520-82ff-11ec-a8a3-0242ac120002" /> */}

      <Generator />
    </Container>
  );
};
