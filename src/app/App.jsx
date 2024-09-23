import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Header from '../widgets/Header/Header';
import UserRoutes from '../features/user/pages/routes';

function App() {
    return (
        <>
            <Header />
            <main className="container main">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {UserRoutes}
                </Routes>
            </main>
        </>
    );
}

export default App;
