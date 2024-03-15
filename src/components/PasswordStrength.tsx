export default function PasswordStrength() {
  return (
    <div className="mb-2 mt-2 flex  bg-Dark  text-black border-solid">
      <label htmlFor="passworsdStrength">STRENGTH</label>
      <div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <label htmlFor="passwordStrengthText">EASY</label>
    </div>
  );
}
