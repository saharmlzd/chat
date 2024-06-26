import { useState } from "react";
import classNames from "classnames";

import styles from "@/styles/floatInput.scss";

import { convertPersianNumber2English } from "@/utility/functions";
import { regexHandler } from "@/utility/functions";

import { CloseCircle, Eye, EyeSlash } from "iconsax-react";

const FloatInput = ({
  placeholder,
  value,
  type = "text",
  required,
  disabled,
  autoFocus,
  maxLength,
  onChange,
  onFocus,
  onBlur,
  className,
  clearIcon,
  suffix,
  scrollOnFocus = true,
  ...props
}) => {
  const onChangeHandler = (e) => {
    if (["tel", "number"].includes(type)) {
      e.target.value = regexHandler(e.target.value, true);
    }
    e.target.value = convertPersianNumber2English(e.target.value);
    onChange?.(e);
  };

  return (
    <div>
      <input
        className="border w-full rounded-3xl p-3 bg-[#E9FEFE] mb-3 border-[#36B8B8] "
        onChange={onChangeHandler}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
      />
    </div>
  );
};

export default FloatInput;
