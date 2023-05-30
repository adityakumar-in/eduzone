import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  render() {
    const { isMenuOpen } = this.state;
    return (
      <header>
        <div className="con">
          <div className="header-left">
            <div className="logo center" id="historicaLogo">
              <Link to="/" className="nav-link">Eduzone</Link>
            </div>
            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <ul>
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={this.toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
