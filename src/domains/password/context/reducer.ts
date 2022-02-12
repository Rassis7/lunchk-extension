export type PasswordOptionsValuesType = {
  sliderValue: number;
  hasNumber: boolean;
  hasSpecialChars: boolean;
  hasUpperCase: boolean;
};

export type ReducerActionTypes =
  | { type: "ADD_SLIDER_VALUE"; value: number }
  | { type: "HAS_NUMBER"; value: boolean }
  | { type: "HAS_SPECIAL_CHARS"; value: boolean }
  | { type: "HAS_UPPER_CASE"; value: boolean };

export function reducer<State>(
  prevState: PasswordOptionsValuesType,
  { type, value }: ReducerActionTypes
): PasswordOptionsValuesType {
  switch (type) {
    case "ADD_SLIDER_VALUE": {
      return { ...prevState, sliderValue: value as number };
    }
    case "HAS_NUMBER": {
      return { ...prevState, hasNumber: value as boolean };
    }
    case "HAS_SPECIAL_CHARS": {
      return { ...prevState, hasSpecialChars: value as boolean };
    }
    case "HAS_UPPER_CASE": {
      return { ...prevState, hasUpperCase: value as boolean };
    }
  }
}
