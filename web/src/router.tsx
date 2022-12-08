import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import About from './pages/About';
import Documents from './pages/Documents';
import Home from './pages/Home';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="documents" element={<Documents />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
