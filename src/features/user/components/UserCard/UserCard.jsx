import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './UserCard.module.scss';
import { useDispatch } from 'react-redux';
import { hideUser, moveUser } from '../../usersSlice';

function UserCard({ customClass, user }) {
    const dispatch = useDispatch();
    //стэйт выпадающего меню
    const [showDropdown, setShowDropdown] = useState(false);
    // данные пользователя
    const { name, address, company, id, archiveUser, isHide } = user;
    //реф выпадающего меню
    const dropdownRef = useRef(null);

    const handleShowDropdown = (e) => {
        if (!dropdownRef.current.contains(e.target)) {
            setShowDropdown(false);
        }
    };

    const handleMoveUser = (id) => {
        dispatch(moveUser(id));
    };
    const handleHideUser = (id) => {
        dispatch(hideUser(id));
    }

    //обработка клика вне выпадающего списка
    useEffect(() => {
        document.addEventListener('mousedown', handleShowDropdown);
        return () => document.removeEventListener('mousedown', handleShowDropdown);
    }, []);

    return (
        <div
            style={{ display: isHide ? 'none' : '' }}
            className={`${styles.userCard} ${customClass}`}
        >
            <img className={styles.userAvatar} src="/images/avatar.webp" alt="" />
            <div className={styles.userContent}>
                <div className={styles.userInfo}>
                    <h3 className={styles.userName}>{name}</h3>
                    <p className={styles.userCompany}>{company}</p>
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
                        <Link className={styles.userDropdownItem} to={`/user/${id}`}>
                            Редактировать
                        </Link>
                        <button
                            onClick={() => handleMoveUser(id)}
                            className={styles.userDropdownItem}
                        >
                            {archiveUser ? 'Активировать' : 'Архивировать'}
                        </button>
                        <button onClick={() => handleHideUser(id)} className={styles.userDropdownItem}>Скрыть</button>
                    </div>
                </div>
                <p className={styles.userCity}>{address}</p>
            </div>
        </div>
    );
}

export default UserCard;
