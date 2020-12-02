import React from "react"
import Logo from "../images/PDLogoNav.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/global-nav-bar.css"

const GlobalNav = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark pb-0">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="navbar-brand" id="homeLink" href="/docs/introduction"><img src={Logo} className="d-inline-block align-middle mx-auto" height="25" alt="PagerDuty"/> | Knowledge Base</a>
        </li>
      </ul>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-lg-5">
          <li className="nav-item active">
            <a className="nav-link" href="/docs/introduction">Knowledge Base</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.pagerduty.com/integrations/">Integrations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://developer.pagerduty.com/">API Docs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://community.pagerduty.com/forum/">Community Discussions</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-lg-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://tickets.pagerduty.com/hc/en-us/requests/new">Contact Support</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://tickets.pagerduty.com/hc/en-us/requests">My Support Tickets</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>

)


export default GlobalNav
