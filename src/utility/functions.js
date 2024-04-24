function convertPersianNumber2English(value) {
  return value.replace(/([۰-۹])/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
}

function regexHandler(
  value = "",
  isNumberValid = false,
  isEnglishCharValid = false
) {
  let regex = "";
  if (isNumberValid) {
    regex += "0-9۰-۹";
    // regex += "09[0-9]{9}$";
  }
  if (isEnglishCharValid) {
    regex += "a-zA-Z";
  }
  return value.replace(new RegExp(`[^${regex}]`), "");
}
function onlyNumbers(value) {
  const enNumricValue = convertPersianNumber2English(value);
  const numericValue = enNumricValue.replace(/[^0-9]/g, "");
  return numericValue;
}
export { convertPersianNumber2English, regexHandler, onlyNumbers };
