import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../features/user/api/getUsers';
import { getArchiveUser, getUsersState } from '../../features/user/usersSelectors';
import UserCard from '../../features/user/components/UserCard/UserCard';
//styles
import styles from './HomePage.module.scss';

function HomePage() {
    const dispatch = useDispatch();

    const { items, status } = useSelector(getUsersState);
    const archiveUsers = useSelector(getArchiveUser);

    useEffect(() => {
        if (items.length === 0) {
            dispatch(getUsers());
        }
    }, []);

    return (
        <div className={styles.homePage}>
            <div className={styles.activeUsers}>
                <h2 className={styles.title}>Активные</h2>
                <div className={styles.usersList}>
                    {status === 'loading'
                        ? 'Loading...'
                        : items
                              .filter((user) => user.archiveUser !== true)
                              .map((user) => (
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
