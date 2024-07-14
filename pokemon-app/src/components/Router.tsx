import { Route, Routes } from 'react-router-dom';
import App from '../App';
import NotFound from './404';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
