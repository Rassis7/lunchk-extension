import {
  createContext,
  Dispatch,
  ReactNode,
  Reducer,
  ReducerAction,
  ReducerState,
  useReducer,
  VFC,
} from "react";
import {
  ReducerActionTypes,
  reducer,
  PasswordOptionsValuesType,
} from "./reducer";

export type ReducerTypes = Reducer<
  PasswordOptionsValuesType,
  ReducerActionTypes
>;
type PasswordContextProvider = { children: ReactNode };

type PasswordContextType = {
  state: ReducerState<ReducerTypes>;
  dispatch: Dispatch<ReducerAction<ReducerTypes>>;
};
export const PasswordContext = createContext({} as PasswordContextType);

export const PasswordContextProvider: VFC<PasswordContextProvider> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<ReducerTypes, PasswordOptionsValuesType>(
    reducer,
    {
      sliderValue: 15,
      hasNumber: true,
      hasSpecialChars: true,
      hasUpperCase: true,
    },
    (arg) => arg
  );

  return (
    <PasswordContext.Provider value={{ dispatch, state }}>
      {children}
    </PasswordContext.Provider>
  );
};
