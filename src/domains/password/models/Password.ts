type PasswordProps = {
  value: string;
};

type GetRandomPasswordProps = {
  readonly length: number;
  hasNumber?: boolean;
  hasSpecialChars?: boolean;
  hasUpperCase?: boolean;
};

export class Password {
  value: string;

  constructor({ value }: PasswordProps) {
    this.value = value;
  }

  static getRandom({
    length,
    hasNumber = false,
    hasSpecialChars = false,
    hasUpperCase = false,
  }: GetRandomPasswordProps) {
    const numbers = hasNumber ? "0123456789" : "";
    const specialChars = hasSpecialChars ? "!@#$%^&*()" : "";
    const upperCase = hasUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const chars = `abcdefghijklmnopqrstuvwxyz${numbers}${specialChars}${upperCase}`;

    const value = Array(length)
      .fill(chars)
      .map((value) => value[Math.floor(Math.random() * value.length)])
      .join("");

    return new Password({ value });
  }
}
