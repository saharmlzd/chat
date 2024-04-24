import React, { useRef, useEffect } from "react";
import {
  focusInput,
  handleInputChange,
  handleKeyDown,
} from "../utility/helper";

const OtpInput = ({ allowedOtpLength }) => {
  // const otpInputs = Array(allowedOtpLength).fill(null);

  // const refs = otpInputs.map(() => useRef(null));
  // const refs = Array(allowedOtpLength)
  //   .fill(null)
  //   .map(() => useRef(null));

  // const refs = Array(allowedOtpLength).fill(null);
  // refs.forEach(() => refs.push(useRef(null)));
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  // etc
  const refs = [ref1, ref2, ref3, ref4];
  useEffect(() => {
    focusInput(refs, 0);
  }, []);

  return (
    <div>
      {refs.map((inputRef, index) => (
        <input
          key={index}
          type="text"
          className="input_box"
          maxLength={1}
          ref={inputRef}
          onChange={(e) => handleInputChange(refs, index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(refs, index, e)}
          onClick={() => focusInput(refs, index)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
