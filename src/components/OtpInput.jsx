import React, { useRef, useEffect } from "react";
import {
  focusInput,
  handleInputChange,
  handleKeyDown,
} from "../utility/helper";

const OtpInput = ({ allowedOtpLength }) => {
  const otpInputs = Array(allowedOtpLength)
    .fill(null)
    .map(() => useRef(null));

  useEffect(() => {
    // Focus the first input on mount
    focusInput(otpInputs, 0);
  }, []);

  return (
    <div>
      {otpInputs.map((inputRef, index) => (
        <input
          key={index}
          type="text"
          className="input_box"
          maxLength={1}
          ref={inputRef}
          onChange={(e) => handleInputChange(otpInputs, index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(otpInputs, index, e)}
          onClick={() => focusInput(otpInputs, index)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
