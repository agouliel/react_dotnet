import AppRoutes from './AppRoutes';
import Layout from './components/Layout';
import './custom.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ApiProvider from './contexts/ApiProvider'


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
      <ApiProvider>
      <RouterProvider router={router} />
      </ApiProvider>
    );
}
