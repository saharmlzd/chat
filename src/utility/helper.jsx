export const focusInput = (inputs, index) => {
  inputs[index].current.focus();
  console.log(inputs[index], "inputs[index]");
};

export const handleInputChange = (inputs, index, value) => {
  // Move to the next input on value change
  if (value && index < inputs.length - 1) {
    focusInput(inputs, index + 1);
  }
};

export const handleKeyDown = (inputs, index, e) => {
  // move the focus on the left and right side
  if (e.key === "ArrowLeft" && index > 0) {
    focusInput(inputs, index - 1);
  } else if (e.key === "ArrowRight" && index < inputs.length - 1) {
    focusInput(inputs, index + 1);
  }

  // Move to the previous input on Backspace if not on the first input
  if (e.key === "Backspace" && index > 0) {
    e.preventDefault();
    inputs[index].current.value = "";
    focusInput(inputs, index - 1);
  }
};
