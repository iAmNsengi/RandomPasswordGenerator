type includeSymbolsProps = {
  includeSymbols: boolean;
  setIncludeSymbols: (include: boolean) => void;
};

export default function IncludeSymbols({
  includeSymbols,
  setIncludeSymbols,
}: includeSymbolsProps) {
  function handleIncludesymbolsChange() {
    setIncludeSymbols(!includeSymbols);
  }
  return (
    <div>
      <input
        id="includeSymbols"
        type="checkbox"
        className="mr-3 mb-3 mt-2 accent-PastelGreen"
        onChange={handleIncludesymbolsChange}
      />
      <label htmlFor="includeSymbols" className="text-sm">
        Include Symbols
      </label>
    </div>
  );
}
