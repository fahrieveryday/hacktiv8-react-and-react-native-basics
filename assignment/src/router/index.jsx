import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Layout } from 'shared/layout';
import { NotFoundPage } from 'pages/404';
import { HomePage } from 'pages/home';
import { AboutPage } from 'pages/about';
import { ExperiencePage } from 'pages/experience';
import { SkillsPage } from 'pages/skills';
import { InterestsPage } from 'pages/interests';
import { AwardsPage } from 'pages/awards';

const Routes = () => {
  let routeList = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '/experience',
          element: <ExperiencePage />,
        },
        {
          path: '/skills',
          element: <SkillsPage />,
        },
        {
          path: '/interests',
          element: <InterestsPage />,
        },
        {
          path: '/awards',
          element: <AwardsPage />,
        },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);
  return routeList;
};

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
