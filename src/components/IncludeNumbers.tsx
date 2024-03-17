type includeNumbersProps = {
  includeNumbers: boolean;
  setIncludeNumbers: (include: boolean) => void;
};

export default function IncludeNumbers({
  includeNumbers,
  setIncludeNumbers,
}: includeNumbersProps) {
  function handleIncludenumbersChange() {
    setIncludeNumbers(!includeNumbers);
  }
  return (
    <div>
      <input
        type="checkbox"
        id="includeNumbers"
        className="mr-3 mt-2 accent-PastelGreen"
        checked={includeNumbers}
        onChange={handleIncludenumbersChange}
      />
      <label htmlFor="includeNUmbers" className="text-sm">
        Include Numbers
      </label>
    </div>
  );
}
