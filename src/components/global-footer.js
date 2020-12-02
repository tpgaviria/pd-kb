import React from "react"
import FooterLogo from "../images/P-GreenRGB.png"
import StatusIndicator from "./status-indicator"
import "../styles/footer.css"

const GlobalFooter = ({ siteTitle }) => (
    <footer className="page-footer font-small blue pt-4" id="page-footer">

      <div className="pd-footer container-fluid text-center text-md-left">
        <div className="pd-footer-inner">

            <div className="row">

            <div className="col-md-2 offset-md-1 mb-md-0 mb-3 col-sm-6">

                <h5 className="text-uppercase footer-header">Getting Started</h5>

                <ul className="list-unstyled footer-links">
                <li>
                    <a className="footer-link" href="https://support.pagerduty.com/docs/introduction">Intro to PagerDuty</a>
                </li>
                <li>
                    <a className="footer-link" href="https://www.pagerduty.com/faq/">FAQ</a>
                </li>
                <li>
                    <a className="footer-link" href="https://community.pagerduty.com/forum/c/using-pagerduty/best-practices?utm_source=web&utm_campaign=kb_footer_nav&utm_medium=link">Best Practices</a>
                </li>
                <li>
                    <a className="footer-link" href="https://www.pagerduty.com/integrations/">Integration Guides</a>
                </li>
                </ul>

            </div>

            <div className="col-md-2 mb-md-0 mb-3 col-sm-6">

                <h5 className="text-uppercase footer-header">Resources</h5>

                <ul className="list-unstyled footer-links">
                <li>
                    <a className="footer-link" href="https://www.pagerduty.com/whats-new/">What's New</a>
                </li>
                <li>
                    <a className="footer-link" href="https://developer.pagerduty.com/">Developer Docs</a>
                </li>
                <li>
                    <a className="footer-link" href="https://response.pagerduty.com/">Incident Response Docs</a>
                </li>
                <li>
                    <a className="footer-link" href="https://www.pagerduty.com/eng/">Engineering Blog</a>
                </li>
                <li>
                    <a className="footer-link" href="https://www.pagerduty.com/platform/on-call-management/mobile/">Mobile Apps</a>
                </li>
                </ul>

            </div>

            <div className="col-md-2 mb-md-0 mb-3 d-none d-md-block">
                <div className="footer-logo-wrapper">
                    <img src={FooterLogo} className="d-inline-block align-middle mx-auto footer-logo" alt="PagerDuty"/>
                </div>
            </div>

            <div className="col-md-2 mb-md-0 mb-3 col-sm-6">

                <h5 className="text-uppercase footer-header">Support</h5>

                <ul className="list-unstyled footer-links">
                <li>
                    <a className="footer-link" href="https://support.pagerduty.com/">Knowledge Base</a>
                </li>
                <li>
                    <a className="footer-link" href="https://community.pagerduty.com/forum/">Community Forum</a>
                </li>
                <li>
                    <a className="footer-link" href="https://status.pagerduty.com/">Service Status <StatusIndicator/></a>
                </li>
                <li>
                    <a className="footer-link" href="https://tickets.pagerduty.com/hc/en-us/signin?return_to=https%3A%2F%2Ftickets.pagerduty.com%2Fhc%2Fen-us%2Frequests">Support Tickets</a>
                </li>
                </ul>

            </div>

            <div className="col-md-2 mb-md-0 mb-3 col-sm-6">

                <h5 className="text-uppercase footer-header">Company</h5>

                <ul className="list-unstyled footer-links">
                <li>
                    <a className="footer-link" href="https://www.pagerduty.com/company/">About PagerDuty</a>
                </li>
                <li>
                    <a className="footer-link" href="https://www.pagerduty.com/blog/">Company Blog</a>
                </li>
                <li>
                    <a className="footer-link" href="https://www.pagerduty.com/security/">Security</a>
                </li>
                <li>
                    <a className="footer-link" href="https://www.pagerduty.com/online-terms-and-conditions/">Terms and Conditions</a>
                </li>
                <li>
                    <a className="footer-link" href="https://www.pagerduty.com/privacy-policy/">Privacy Policy</a>
                </li>
                <li>
                    <a className="footer-link" href="https://www.pagerduty.com/community-policy/">Community Policy</a>
                </li>
                </ul>

            </div>

            </div>
        </div>

      </div>

    </footer>


)

export default GlobalFooter