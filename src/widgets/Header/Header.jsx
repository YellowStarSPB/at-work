import React from 'react';
import { Link } from 'react-router-dom';
//components
import UserProfile from '../UserProfile/UserProfile';
//styles
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={`container ${styles.header}`}>
            <Link className={styles.headerLogo} to={'/'} />
            <UserProfile />
        </header>
    );
}

export default Header;
