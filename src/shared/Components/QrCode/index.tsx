import { VFC } from "react";
import { default as ReactQRCode } from "react-qr-code";
import { Container } from "./styles";

type QrCodeType = {
  code: string;
};

export const QrCode: VFC<QrCodeType> = ({ code }) => {
  return (
    <Container>
      <ReactQRCode value={code} />
    </Container>
  );
};
