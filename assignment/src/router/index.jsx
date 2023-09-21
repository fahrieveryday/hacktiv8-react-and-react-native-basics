import { BrowserRouter, useRoutes } from 'react-router-dom';
import { HomePage } from './pages/home';
import { UserPage } from './pages/user';
import { NotFoundPage } from './pages/404';
import { useAppSelector } from 'utils/redux/hooks';

const UserLoggedRoutes = () => {
  const routeList = [
    {
      path: '/',
      children: [
        { index: true, element: <HomePage /> },
        { path: '/user', element: <UserPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ];

  const routes = useRoutes(routeList);
  return routes;
};

const RestrictedRoutes = () => {
  const routeList = [
    {
      path: '/',
      children: [
        { index: true, element: <HomePage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ];

  const routes = useRoutes(routeList);
  return routes;
};

export function AppRouter() {
  const reduxState = useAppSelector((state) => state);
  const { username, password } = reduxState.user;
  const isUserLogged = Boolean(username && password);

  return (
    <BrowserRouter>
      {isUserLogged ? <UserLoggedRoutes /> : <RestrictedRoutes />}
    </BrowserRouter>
  );
}
