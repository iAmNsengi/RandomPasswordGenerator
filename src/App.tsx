import "./App.css";
import { useState } from "react";
import PasswordLength from "./components/PasswordLength";
import IncludeNumbers from "./components/IncludeNumbers";
import IncludeSymbols from "./components/IncludeSymbols";
import generatePassword from "./utils/generatePassword";
import { AiOutlineCopy } from "react-icons/ai";
import IncludeLowerCase from "./components/IncludeLowerCase";
import IncludeUpperCase from "./components/IncludeUpperCase";

function App() {
  const [password, setPassword] = useState<string | null>(null);
  const [passwordLength, setPasswordLength] = useState<number>(0);
  const [includeLowerCase, setIncludeLowerCase] = useState<boolean>(true);
  const [includeUpperCase, setIncludeUpperCase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  function handleGeneratePassword() {
    const newPassword = generatePassword({
      length: passwordLength,
      includeUpperCase,
      includeLowerCase,
      includeNumbers,
      includeSymbols,
    });
    setPassword(newPassword);
    document.getElementsByClassName("copyMessage")[0].classList.add("hidden");
  }

  function handleCopy() {
    if (password) {
      navigator.clipboard.writeText(password);
      document
        .getElementsByClassName("copyMessage")[0]
        .classList.remove("hidden");
    }
  }
  return (
    <div className="font-JetBrains bg-black flex gap-4  flex-col justify-center min-h-screen text-white items-center">
      <div>
        <label className="opacity-60">Password Generator</label>
      </div>

      <div className="bg-BalticSea text-white px-4 py-3 break-all flex justify-between items-center w-[20rem] mb-4">
        <div className="text-base">
          {password || <label className="opacity-50">P4$5W0rD!</label>}
        </div>
        <button
          className="text-xl text-PastelGreen flex items-center justify-between"
          onClick={handleCopy}
        >
          <label
            htmlFor="copyMessage"
            className="copyMessage text-sm mr-2 hidden"
          >
            COPIED
          </label>
          <AiOutlineCopy />
        </button>
      </div>

      <div className="w-[20rem] bg-BalticSea p-4">
        <PasswordLength
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <IncludeUpperCase
          includeUpperCase={includeUpperCase}
          setIncludeUpperCase={setIncludeUpperCase}
        />
        <IncludeLowerCase
          includeLowerCase={includeLowerCase}
          setIncludeLowerCase={setIncludeLowerCase}
        />
        <IncludeNumbers
          includeNumbers={includeNumbers}
          setIncludeNumbers={setIncludeNumbers}
        />
        <IncludeSymbols
          includeSymbols={includeSymbols}
          setIncludeSymbols={setIncludeSymbols}
        />
        <div className="bg-Blackish p-3 mt-2 mb-2 w-full flex justify-between items-center">
          <label className="uppercase text-xs opacity-60 ">strength</label>
          <div className="flex items-center">
            <label className="text-sm opacity-80 mr-2">MEDIUM</label>
            <div className="flex items-center justify-between">
              <span className="w-[5px] h-[18px] border border-solid mr-1"></span>
              <span className="w-[5px] h-[18px] border border-solid mr-1"></span>
              <span className="w-[5px] h-[18px] border border-solid mr-1"></span>
              <span className="w-[5px] h-[18px] border border-solid mr-1"></span>
            </div>
          </div>
        </div>
        <button
          onClick={handleGeneratePassword}
          className="px-4 py-2 text-black bg-PastelGreen rounded-md shadow-md w-full border border-solid hover:bg-BalticSea hover:text-PastelGreen hover:border-PastelGreen transition-all duration-300 uppercase mt-5"
        >
          generate &#8594;
        </button>
      </div>
    </div>
  );
}

export default App;
