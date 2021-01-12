export const validate = (login, pass) => {
  if (login.length > 8 && pass.length > 8) return true;
  return false;
};
