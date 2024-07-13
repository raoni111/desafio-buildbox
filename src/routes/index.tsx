import {createBrowserRouter} from 'react-router-dom';
import HomeRoute from './home';

const route = createBrowserRouter([
    {
        path: '/',
        element: <HomeRoute />,
    }
]);

export default route