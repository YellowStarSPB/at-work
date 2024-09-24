import { createSelector } from '@reduxjs/toolkit';

export const getUsersState = (state) => state.users;
export const getUser = (state, id) => {
    return state.users.items.find((user) => user.id === +id);
};

export const getArchiveUser = createSelector(
    (state) => state.users.items,
    (items) => items.filter((user) => user.archiveUser),
);
export const getStatus = ({ users }) => users.status;
