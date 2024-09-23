import React from 'react';
import styles from './UserPage.module.scss';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
const setActive = ({ isActive }) => (isActive ? styles.active : '');
function UserPage() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className={styles.editUserPage}>
            <button onClick={handleGoBack} className={styles.goBack}>
                Назад
            </button>
            <div className={styles.userContent}>
                <div className={styles.left}>
                    <img
                        className={styles.userAvatar}
                        src="/images/user-profile-avatar.webp"
                        alt="name"
                    />
                    <nav className={styles.userNavigate}>
                        <NavLink
                            className={({ isActive }) =>
                                `${styles.navLink} ${isActive ? styles.active : ''}`
                            }
                            to={'profile-data'}
                        >
                            Данные профиля
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `${styles.navLink} ${isActive ? styles.active : ''}`
                            }
                            to={'workspace'}
                        >
                            Рабочее пространство
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `${styles.navLink} ${isActive ? styles.active : ''}`
                            }
                            to={'privacy'}
                        >
                            Приватность
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `${styles.navLink} ${isActive ? styles.active : ''}`
                            }
                            to={'security'}
                        >
                            Безопасность
                        </NavLink>
                    </nav>
                </div>
                <div className={styles.right}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default UserPage;
