import { Link } from "react-router-dom";
import UserService from "../services/UserService";

const Menu = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Helix</Link>
      </div>
      <div id="navbar">
        <ul className="nav navbar-nav">
          <li><Link to="/">Projects</Link></li>
          <li><Link to="/books/new">New Project</Link></li>
          <li><a href="http://localhost:8080/auth/realms/demo/account/#/resources" target="_blank" rel="noreferrer">Collaboration</a></li>
          <li><a href="http://localhost:8080/auth/realms/demo/account/#/personal-info" target="_blank" rel="noreferrer">Account</a></li>
        </ul>
        <button className="btn btn-success navbar-btn navbar-right" style={{ marginRight: 0 }} onClick={() => UserService.doLogout()}>
          Logout
        </button>
        <p className="navbar-text navbar-right" style={{ marginRight: 15 }}>
          Signed in as {UserService.getUsername()}
        </p>
      </div>
    </div>
  </nav>
)

export default Menu
