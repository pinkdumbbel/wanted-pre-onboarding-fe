import { useContext } from 'react';
import { useRef } from 'react';
import { InputValueContext, ValidationContext } from '../components/login';
import validateChk from '../util/validateChk';

const useLoginValidate = (validateType) => {
  const { validate, setValidate } = useContext(ValidationContext);
  const { inputValue, setInputValue } = useContext(InputValueContext);

  const emailRef = useRef();
  const passwdRef = useRef();

  const onKeyUp = () => {
    const { current } = validateType === 'email' ? emailRef : passwdRef;

    if (!current) return;

    const validateInput = {
      [`${validateType}Input`]: current.value || '',
    };

    if (!validateChk(validateInput)) {
      validate[validateType] &&
        setValidate({ ...validate, [validateType]: false });
      return;
    }

    !validate[validateType] &&
      setValidate({
        ...validate,
        [validateType]: true,
        [`${validateType}Blur`]: true,
      });
  };

  const onValidateBlur = () => {
    const { current } = validateType === 'email' ? emailRef : passwdRef;

    if (!current) return;

    setValidate({
      ...validate,
      [`${validateType}Blur`]: validate[validateType],
    });

    if (validate[validateType] && validate[`${validateType}Blur`]) {
      setInputValue({ ...inputValue, [validateType]: current.value });
    }
  };

  return {
    inputType: validateType === 'email' ? 'text' : 'password',
    placeholder: validateType === 'email' ? '이메일' : '비밀번호',
    inputRef: validateType === 'email' ? emailRef : passwdRef,
    validate,
    onKeyUp,
    onValidateBlur,
    setValidate,
  };
};

export default useLoginValidate;
