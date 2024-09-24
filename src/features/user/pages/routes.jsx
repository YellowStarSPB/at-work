import { Route, Navigate } from 'react-router-dom';
import ProfileData from './ProfileData/ProfileData';
import OtherPage from './OtherPage/OtherPage';
import UserPage from '../../../pages/UserPage/UserPage';

const UserRoutes = (
    <Route path="/user/:id" element={<UserPage />}>
        <Route index element={<Navigate to="profile-data" replace={true} />} />
        <Route path="profile-data" element={<ProfileData />} />
        <Route path="*" element={<OtherPage />} />
    </Route>
);

export default UserRoutes;
