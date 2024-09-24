import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk('@@users/fetchUsers', async (_,{ rejectWithValue }) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/?_limit=6`);
        if (!res.ok) {
            throw new Error('Failed to fetch users');
        }
        const data = await res.json();
        const preparedData = [];
        data.forEach((user) => {
            const userData = {
                id: user.id,
                userName: user.username,
                name: user.name,
                address: user.address.city,
                company: user.company.name,
                email: user.email,
                phone: user.phone,
                archiveUser: false,
                isHide: false,
            };
            preparedData.push(userData);
        });
        return preparedData;
    } catch (error) {
        rejectWithValue(error.message);
    }
});
