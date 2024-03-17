type includeLowerCaseProps = {
  includeLowerCase: boolean;
  setIncludeLowerCase: (include: boolean) => void;
};
export default function IncludeLowercase({
  includeLowerCase,
  setIncludeLowerCase,
}: includeLowerCaseProps) {
  function handleIncludeLowercaseChange() {
    setIncludeLowerCase(!includeLowerCase);
  }
  return (
    <div>
      <input
        type="checkbox"
        id="includeLowerCase"
        className="mr-3 accent-PastelGreen"
        checked={includeLowerCase}
        onChange={handleIncludeLowercaseChange}
      />
      <label htmlFor="includeLowerCase" className="text-sm">
        Include Lowercase Letters
      </label>
    </div>
  );
}
