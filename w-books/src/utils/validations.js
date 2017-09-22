export function emailValidation(email) {
  return (email.length > 0 && email.includes("@"))
}
export function passwordValidation(password) {
  if (password.length >= 8 && password.length <= 52) {
    const regLetters = new RegExp("[^a-z|^A-Z]");
    const regNumbers = new RegExp("[^0-9]");
    return regLetters.test(password) && regNumbers.test(password);
  }
  return false
}
