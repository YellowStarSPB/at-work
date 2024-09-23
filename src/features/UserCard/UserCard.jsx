import React, { useEffect, useRef, useState } from 'react';

import styles from './UserCard.module.scss';
import { Link } from 'react-router-dom';

function UserCard({ customClass }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleShowDropdown = (e) => {
        if (!dropdownRef.current.contains(e.target)) {
            setShowDropdown(false);
        }
    };
    //обработка клика вне выпадающего списка
    useEffect(() => {
        document.addEventListener('mousedown', handleShowDropdown);
        return () => document.removeEventListener('mousedown', handleShowDropdown);
    }, []);

    return (
        <div className={`${styles.userCard} ${customClass}`}>
            <img className={styles.userAvatar} src="/images/avatar.webp" alt="" />
            <div className={styles.userContent}>
                <div className={styles.userInfo}>
                    <h3 className={styles.userName}>LoveHat</h3>
                    <p className={styles.userCompany}>At-Work</p>
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className={styles.edits}
                    ></button>
                    <div
                        ref={dropdownRef}
                        className={`${styles.userDropdown} ${
                            showDropdown ? styles.active : ''
                        }`}
                    >
                        <Link className={styles.userDropdownItem} to={'/'}>
                            Редактировать
                        </Link>
                        <button className={styles.userDropdownItem}>Архивировать</button>
                        <button className={styles.userDropdownItem}>Скрыть</button>
                    </div>
                </div>
                <p className={styles.userCity}>Санкт-Петербург</p>
            </div>
        </div>
    );
}

export default UserCard;
