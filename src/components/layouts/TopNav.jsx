import React from 'react'
import '../../assets/css/TopNav.css';

const TopNav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <span className="logo">APP LOGO</span>
        <nav className="nav-links">
          <a href="/">DASHBOARD</a>
          <a href="/createAdds">CREATE ADS </a>
        </nav>
      </div>
    </div>
  )
}

export default TopNav