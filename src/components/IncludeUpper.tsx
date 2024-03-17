type includeUpperCaseProps = {
  includeUpperCase: boolean;
  setIncludeUpperCase: (include: boolean) => void;
};
export default function IncludeUpperCase({
  includeUpperCase,
  setIncludeUpperCase,
}: includeUpperCaseProps) {
  function handleIncludeUppercaseChange() {
    setIncludeUpperCase(!includeUpperCase);
  }
  return (
    <div className="mb-2">
      <input
        type="checkbox"
        id="includeUpperCase"
        className="mr-3 mt-4 accent-PastelGreen"
        checked={includeUpperCase}
        onChange={handleIncludeUppercaseChange}
      />
      <label htmlFor="includeUpperCase" className="text-sm">
        Include Uppercase Letters
      </label>
    </div>
  );
}
