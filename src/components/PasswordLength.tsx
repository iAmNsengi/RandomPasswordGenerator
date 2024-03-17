import { ChangeEvent } from "react";
type passwordLengthProps = {
  passwordLength: number;
  setPasswordLength: (length: number) => void;
};

export default function PasswordLength({
  passwordLength,
  setPasswordLength,
}: passwordLengthProps) {
  function handlePasswordLengthChange(event: ChangeEvent<HTMLInputElement>) {
    setPasswordLength(parseInt(event.target.value));
  }
  return (
    <div className="mb-3 mt-2">
      <label className="flex justify-between items-center">
        <div className="text-sm">Character Length</div>
        <div className="text-xl text-PastelGreen">{passwordLength}</div>
      </label>
      <input
        type="range"
        min="4"
        max="20"
        id="passwordLength"
        value={passwordLength}
        className="w-full bg-dark accent-PastelGreen h-1"
        onChange={handlePasswordLengthChange}
      />
    </div>
  );
}
