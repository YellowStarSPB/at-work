import React, { useEffect } from 'react';
import styles from './HomePage.module.scss';
import UserCard from '../../features/user/components/UserCard/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../features/user/api/getUsers';
import { getUsersState } from '../../features/user/usersSelectors';

function HomePage() {
    const dispatch = useDispatch();

    const { activeUsers, status, archiveUsers } = useSelector(getUsersState);

    useEffect(() => {
        if(activeUsers.length === 0){
            dispatch(getUsers());
        }
    }, []);

    return (
        <div className={styles.homePage}>
            <div className={styles.activeUsers}>
                <h2 className={styles.title}>Активные</h2>
                <div className={styles.usersList}>
                    {status === 'loading'
                        ? 'loading...'
                        : activeUsers.map((user) => (
                              <UserCard
                                  key={user.id}
                                  user={user}
                                  customClass={styles.cardStyle}
                              />
                          ))}
                </div>
            </div>
            {archiveUsers.length !== 0 && (
                <div className={styles.archiveUsers}>
                    <h2 className={styles.title}>Архив</h2>
                    <div className={styles.usersList}>
                        {archiveUsers.map((user) => (
                            <UserCard
                                key={user.id}
                                user={user}
                                customClass={styles.cardStyle}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomePage;
