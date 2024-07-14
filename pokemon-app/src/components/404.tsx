import { Link } from 'react-router-dom';
import Header from './Header';

function NotFound() {
  return (
    <>
      <Header />
      <div>
        <h1>404</h1>
        <h2>Page not exist</h2>
        <h3>
          <Link to={'/'}>Return to main page</Link>
        </h3>
      </div>
    </>
  );
}
export default NotFound;
