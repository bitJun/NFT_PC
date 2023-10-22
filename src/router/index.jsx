import Layout from '../views/Layout/index';
import Section from '../views/Section/index';
import Home from '../views/Home/index'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'section',
        element: <Section />,
      }
    ],
  },
]

export default routes;