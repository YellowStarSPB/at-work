import { useState } from 'react';
import useValidation from './useValidation';

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations);
    const onChange = (e) => {
        const eventTarget = e.target;
        setValue(eventTarget.value.replace(/[<>!#$%^&*_]/g, ''));
    };
    const onChangePhone = (string) =>{
        setValue(string)
    }

    const onBlur = () => {
        setIsDirty(true);
    };

    const clearValue = () => {
        setValue('')
    }

    return {
        value,
        onChange,
        onBlur,
        onChangePhone,
        isDirty,
        clearValue,
        setIsDirty,
        ...valid,
    };
};

export default useInput;
