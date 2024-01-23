export const checkValidData = (email, passward) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const isPasswardValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passward);

  if (!isEmailValid) return "Enter Valid Email";
  if (!isPasswardValid) return "Enter Valid Passward";

  return null;
};
