import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStatus, getUser } from '../../usersSelectors';
import { getUsers } from '../../api/getUsers';
import { updateUser } from '../../usersSlice';

import Input from '../../../../shared/UI/Input/Input';
//styles
import styles from './ProfileData.module.scss';

function ProfileData() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const status = useSelector(getStatus);
    const user = useSelector((state) => getUser(state, id));
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!user) {
            dispatch(getUsers(id));
        }
    }, [id, user, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(formRef.current);

        let newUserData = { ...user };
        let isValid = true;
        formData.forEach((value, key) => {
            if (value.length >= 2) {
                newUserData[key] = value;
            } else {
                isValid = false;
            }
        });

        console.log(isValid);
        if (isValid) {
            dispatch(updateUser(newUserData));
        }

        //имитация отправки
        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    if (status === 'loading') {
        return <h2>Loading...</h2>;
    }

    return (
        <div className={styles.profileData}>
            <h2 className={styles.title}>Данные профиля</h2>
            <form ref={formRef} className={styles.profileInfo}>
                {loading && (
                    <div className={styles.loaderWrapper}>
                        <span className={styles.loader}></span>
                    </div>
                )}
                <Input user={user} selector="name" label="Имя" />
                <Input user={user} selector="userName" label="Никнейм" />
                <Input user={user} selector="email" label="Почта" />
                <Input user={user} selector="address" label="Город" />
                <Input user={user} selector="phone" label="Телефон" />
                <Input user={user} selector="company" label="Название компании" />
            </form>
            <button onClick={handleSubmit} className={styles.submitButton}>
                Сохранить
            </button>
        </div>
    );
}

export default ProfileData;
