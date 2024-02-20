import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound/NotFound';
import Services from '../pages/Services/Services';
import About from '../components/About/About';
import Home from '../pages/Home/Home';
import Team from '../pages/Team/Team';
import Appointment from '../pages/Appointment/Appointment';

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
      {
        path: '/our_doctors',
        element: <Team />,
      },
      {
        path: '/appointment',
        element: <Appointment />,
      },
    ],
  },
]);

export default router;
