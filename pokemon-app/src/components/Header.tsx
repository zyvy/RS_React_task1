import logo from '../assets/logo.jpg';
function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <h1>Search for anime title</h1>
    </header>
  );
}
export default Header;
