const validateChk = ({ emailInput, passwdInput }) => {
  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  const regPassword =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (emailInput && regEmail.test(emailInput)) return true;

  if (passwdInput && regPassword.test(passwdInput)) return true;

  return false;
};

export default validateChk;
