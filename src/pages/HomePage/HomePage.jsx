import React from 'react';
import styles from './HomePage.module.scss';
import UserCard from '../../features/UserCard/UserCard';

function HomePage() {
    return (
        <div className={styles.homePage}>
            <div className={styles.activeUsers}>
                <h2 className={styles.title}>Активные</h2>
                <div className={styles.usersList}>
                    <UserCard customClass={styles.cardStyle} />
                    <UserCard customClass={styles.cardStyle} />
                    <UserCard customClass={styles.cardStyle} />
                </div>
            </div>
            <div className={styles.archiveUsers}>
                <h2 className={styles.title}>Архив</h2>
                <div className={styles.usersList}>
                    <UserCard customClass={styles.cardStyle} />
                    <UserCard customClass={styles.cardStyle} />
                    <UserCard customClass={styles.cardStyle} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
