import React from 'react';
import styles from './ProfileData.module.scss';
function ProfileData() {
    return (
        <div className={styles.profileData}>
            <h2 className={styles.title}>Данные профиля</h2>

            <div className={styles.profileInfo}>
                <label className={styles.profileInfoLabel}>
                    Имя
                    <input
                        className={styles.profileInfoInput}
                        type="text"
                        placeholder="Имя"
                    />
                    <button className={styles.profileInfoInputClear}></button>
                </label>
                <label className={styles.profileInfoLabel}>
                    Никнейм
                    <input
                        className={styles.profileInfoInput}
                        type="text"
                        placeholder="Никнейм"
                    />
                    <button className={styles.profileInfoInputClear}></button>
                </label>
                <label className={styles.profileInfoLabel}>
                    Почта
                    <input
                        className={styles.profileInfoInput}
                        type="text"
                        placeholder="Почта"
                    />
                    <button className={styles.profileInfoInputClear}></button>
                </label>
                <label className={styles.profileInfoLabel}>
                    Город
                    <input
                        className={styles.profileInfoInput}
                        type="text"
                        placeholder="Город"
                    />
                    <button className={styles.profileInfoInputClear}></button>
                </label>
                <label className={styles.profileInfoLabel}>
                    Телефон
                    <input
                        className={styles.profileInfoInput}
                        type="text"
                        placeholder="Телефон"
                    />
                    <button className={styles.profileInfoInputClear}></button>
                </label>
                <label className={styles.profileInfoLabel}>
                    Название компании
                    <input
                        className={styles.profileInfoInput}
                        type="text"
                        placeholder="Название компании"
                    />
                    <button className={styles.profileInfoInputClear}></button>
                </label>
            </div>
            <button className={styles.submitButton}>Сохранить</button>
        </div>
    );
}

export default ProfileData;
