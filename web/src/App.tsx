import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './styles/global.css';

import { useRoutes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Documents from './pages/Documents';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'documents', element: <Documents /> },
        { path: 'about', element: <About /> },
        { path: '*', element: <Home /> },
      ]
    },
  ]);
  return routes;
}

export default App;
