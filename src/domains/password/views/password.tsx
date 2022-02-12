import { Actions, Generator } from "..";
import { PasswordContextProvider } from "../context";

export const Password = () => {
  return (
    <PasswordContextProvider>
      <>
        <Generator />
        <Actions />
      </>
    </PasswordContextProvider>
  );
};
