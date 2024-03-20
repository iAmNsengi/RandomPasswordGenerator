import "./App.css";
import { useState } from "react";
import PasswordLength from "./components/PasswordLength";
import IncludeNumbers from "./components/IncludeNumbers";
import IncludeSymbols from "./components/IncludeSymbols";
import generatePassword from "./utils/generatePassword";
import { AiOutlineCopy } from "react-icons/ai";
import IncludeLowerCase from "./components/IncludeLower";
import IncludeUpperCase from "./components/IncludeUpper";

function App() {
  const [password, setPassword] = useState<string | null>(null);
  const [passwordLength, setPasswordLength] = useState<number>(0);
  const [includeLowerCase, setIncludeLowerCase] = useState<boolean>(true);
  const [includeUpperCase, setIncludeUpperCase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  function calculatePasswordStrength(password: string) {
    let strength = 0;
    // Increment strength based on criteria
    if (password.length >= 8) {
      strength++;
    }
    if (password.match(/[a-z]/)) {
      strength++;
    }
    if (password.match(/[A-Z]/)) {
      strength++;
    }
    if (password.match(/\d/)) {
      strength++;
    }
    if (password.match(/[$-/:-?{-~!"^_`[\]]/)) {
      strength++;
    }
    return strength;
  }

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
  const passwordStrength = calculatePasswordStrength(password || "");
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
            {passwordStrength >= 5 ? (
              <>
                <label className="text-sm opacity-80 mr-2">STRONG </label>
                <div className="flex items-center justify-between">
                  {" "}
                  <span className=" bg-PastelGreen w-[5px] h-[18px] border border-solid mr-1"></span>{" "}
                  <span className="bg-PastelGreen w-[5px] h-[18px] border border-solid mr-1"></span>{" "}
                  <span className="bg-PastelGreen w-[5px] h-[18px] border border-solid mr-1"></span>{" "}
                  <span className="bg-PastelGreen w-[5px] h-[18px] border border-solid mr-1"></span>
                </div>{" "}
              </>
            ) : passwordStrength >= 4 ? (
              <>
                <label className="text-sm opacity-80 mr-2">MEDIUM </label>
                <div className="flex items-center justify-between">
                  {" "}
                  <span className=" bg-Yellowish w-[5px] h-[18px] border border-solid mr-1"></span>{" "}
                  <span className="bg-Yellowish w-[5px] h-[18px] border border-solid mr-1"></span>{" "}
                  <span className="bg-Yellowish w-[5px] h-[18px] border border-solid mr-1"></span>{" "}
                  <span className=" w-[5px] h-[18px] border border-solid mr-1"></span>
                </div>{" "}
              </>
            ) : passwordStrength >= 3 ? (
              <>
                <label className="text-sm opacity-80 mr-2">WEAK </label>
                <div className="flex items-center justify-between">
                  {" "}
                  <span className=" bg-OrangeRed2 w-[5px] h-[18px] border border-solid mr-1"></span>{" "}
                  <span className="bg-OrangeRed2 w-[5px] h-[18px] border border-solid mr-1"></span>{" "}
                  <span className="w-[5px] h-[18px] border border-solid mr-1"></span>{" "}
                  <span className=" w-[5px] h-[18px] border border-solid mr-1"></span>
                </div>{" "}
              </>
            ) : passwordStrength >= 2 || passwordStrength == 1 ? (
              <>
                <label className="text-sm opacity-80 mr-2">TOO WEAK! </label>
                <div className="flex items-center justify-between">
                  {" "}
                  <span className=" bg-OrangeRed w-[5px] h-[18px] border border-solid mr-1"></span>{" "}
                  <span className="w-[5px] h-[18px] border border-solid mr-1"></span>{" "}
                  <span className="w-[5px] h-[18px] border border-solid mr-1"></span>{" "}
                  <span className=" w-[5px] h-[18px] border border-solid mr-1"></span>
                </div>{" "}
              </>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  {" "}
                  <span className=" w-[5px] h-[18px] border border-solid mr-1"></span>{" "}
                  <span className="w-[5px] h-[18px] border border-solid mr-1"></span>{" "}
                  <span className="w-[5px] h-[18px] border border-solid mr-1"></span>{" "}
                  <span className=" w-[5px] h-[18px] border border-solid mr-1"></span>
                </div>{" "}
              </>
            )}
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
