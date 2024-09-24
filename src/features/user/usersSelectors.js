export const getUsersState = (state) => state.users;
export const getUser = (state, id) => {
    return state.users.activeUsers.find((user) => user.id === +id);
};
export const getStatus = ({users}) => users.status;
