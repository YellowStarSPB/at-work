import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './api/getUsers';

const initialState = {
    activeUsers: [],
    archiveUsers: [],
    status: 'loading', // loading, error, success
};

const usersSlice = createSlice({
    name: '@@users',
    initialState,
    reducers: {
        moveUser: (state, action) => {
            const userId = action.payload;
            const userIndex = state.activeUsers.findIndex((user) => user.id === userId);
            if (userIndex !== -1) {
                const [user] = state.activeUsers.splice(userIndex, 1);
                user.archiveUser = true;
                state.archiveUsers.push(user);
            } else {
                const [user] = state.archiveUsers.splice(userIndex, 1);
                user.archiveUser = false;
                state.activeUsers.push(user);
            }
        },
        hideUser: (state, action) => {
            const userId = action.payload;
            state.activeUsers.forEach((user) =>
                user.id === userId ? (user.isHide = true) : null,
            );
        },
        updateUser: (state, action) => {
            const currentUser = action.payload;
            const newUsers = state.activeUsers.map((user) =>
                user.id === currentUser.id ? (user = currentUser) : user,
            );
            state.activeUsers = newUsers;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state, action) => {
                state.status = 'loading';
                state.activeUsers = [];
                state.activeUsers = [];
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                // console.log(action);
                state.status = 'success';
                state.activeUsers = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'error';
                state.activeUsers = [];
                state.archiveUsers = [];
            });
    },
});
export const { moveUser, hideUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
