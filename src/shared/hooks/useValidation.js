import { useEffect, useState } from 'react';

const patterns = {
    tel: /\([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/,
    // email: /^[A-Za-z0-9](([_.-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([.-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]{2,6}$/,
    msg: /[^<>[\]%&'`]+$/,
};
const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation]
                        ? setMinLengthError(true)
                        : setMinLengthError(false);
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                case 'maxLength':
                    value.length > validations[validation]
                        ? setMaxLengthError(true)
                        : setMaxLengthError(false);
                    break;
                case 'isEmail':
                    patterns.email.test(value)
                        ? setEmailError(false)
                        : setEmailError(true);
                    break;
                case 'isPhone':
                    patterns.tel.test(value) ? setPhoneError(false) : setPhoneError(true);
                    break;
            }
        }
    }, [value, validations]);
    useEffect(() => {
        if (
            isEmpty ||
            maxLengthError ||
            minLengthError ||
            emailError ||
            phoneError
        ) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [
        isEmpty,
        maxLengthError,
        minLengthError,
        emailError,
        phoneError,
    ]);

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        phoneError,
        inputValid,
    };
};
export default useValidation;
