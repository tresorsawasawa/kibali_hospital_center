import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound/NotFound';
import Services from '../pages/Services/Services';
import About from '../components/About/About';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/about_us',
        element: <About />,
      },
    ],
  },
]);

export default router;
