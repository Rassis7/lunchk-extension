import { Actions, Generator } from "../components";
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
