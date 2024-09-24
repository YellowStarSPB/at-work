import { configureStore } from '@reduxjs/toolkit';
import usersSlice from '../../features/user/usersSlice';

const store = configureStore({
    reducer: {
        users: usersSlice,
    },
    devTools: true,
});

export default store;
