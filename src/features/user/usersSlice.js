import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './api/getUsers';

const initialState = {
    items: [],
    status: 'loading', // loading, error, success
};

const usersSlice = createSlice({
    name: '@@users',
    initialState,
    reducers: {
        moveUser: (state, action) => {
            const userId = action.payload;
            state.items.forEach(user => {
                if(user.id === userId){
                    user.archiveUser = !user.archiveUser
                }
            } )
        },
        hideUser: (state, action) => {
            const userId = action.payload;
            state.items.forEach((user) =>
                user.id === userId ? (user.isHide = true) : null,
            );
        },
        updateUser: (state, action) => {
            const currentUser = action.payload;
            const newUsers = state.items.map((user) =>
                user.id === currentUser.id ? (user = currentUser) : user,
            );
            state.items = newUsers;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state, action) => {
                state.status = 'loading';
                state.items = [];
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'success';
                state.items = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'error';
                state.items = [];
            });
    },
});
export const { moveUser, hideUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
