import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <nav>
      <Link to="/">Home</Link><br />
      <Link to="/barcard">Bar card</Link><br />
      <Link to="/recipes">Recipes</Link><br />
      <Link to="/calendar">Calendar</Link><br />
    </nav>
  </header>
);

export default Header;