import AppRoutes from './AppRoutes';
import Layout from './components/Layout';
import './custom.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  [
  {
    path: '/',
    element: <Layout />,
    children:
      createRoutesFromElements(
        <>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </>
      )
  }
  ]
);

export default function App() {
    return (
      <RouterProvider router={router} />
    );
}
