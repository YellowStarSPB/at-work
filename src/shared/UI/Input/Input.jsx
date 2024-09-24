import React, { memo, useEffect } from 'react';
import useInput from '../../hooks/useInput';
import styles from './Input.module.scss';

const Input = React.memo(
    ({ user, selector, label }) => {
        const state = useInput(user ? user[selector] : '', {
            isEmpty: true,
            minLength: 2,
        });

        const handleClearValue = (e) => {
            e.preventDefault();
            state.clearValue();
        };

        return (
            <label className={styles.profileInfoLabel}>
                {label}
                <input
                    className={`${styles.profileInfoInput} ${
                        state.isDirty && !state.inputValid ? styles.error : ''
                    } ${state.inputValid && state.isDirty ? styles.valid : ''}`}
                    type="text"
                    placeholder={label}
                    value={state.value}
                    onChange={state.onChange}
                    onBlur={state.onBlur}
                    name={selector}
                />
                <button
                    onClick={handleClearValue}
                    className={styles.profileInfoInputClear}
                ></button>
            </label>
        );
    },
    (prevProps, nextProps) => {
        return prevProps.user.id === nextProps.user.id;
    },
);

export default Input;
