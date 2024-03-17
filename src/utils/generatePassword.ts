type GeneratePasswordOptions = {
  length: number;
  includeUpperCase: boolean;
  includeLowerCase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "1234567890";
const SYMBOLS = "!@#$%^&*()_-+={[}];:|<,>.?/~`";

function generatePassword({
  length,
  includeUpperCase,
  includeLowerCase,
  includeNumbers,
  includeSymbols,
}: GeneratePasswordOptions) {
  let chars = "";
  if (includeUpperCase) chars += UPPERCASE;
  if (includeLowerCase) chars += LOWERCASE;
  if (includeSymbols) chars += SYMBOLS;
  if (includeNumbers) chars += NUMBERS;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}

export default generatePassword;
