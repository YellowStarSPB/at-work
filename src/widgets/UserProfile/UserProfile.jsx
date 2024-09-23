import React from 'react';
//styles
import styles from './UserProfile.module.scss';

function UserProfile() {
    return (
        <div className={styles.userProfile}>
            <button className={styles.favoritesButton}></button>
            <button className={styles.notificationsButton}></button>
            <div className={styles.userInfo}>
                <img
                    className={styles.userAvatar}
                    src="/images/avatar.webp"
                    alt="Ivan1234"
                />
                <p className={styles.userName}>Ivan1234</p>
            </div>
        </div>
    );
}

export default UserProfile;
