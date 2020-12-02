import React from "react"
import StevieAward from "../images/gold-stevie-award.png"
import "../styles/footer.css"
import 'font-awesome/css/font-awesome.min.css';
import CsatRating from "./csat-rating";

const LandingFooter = ({ siteTitle }) => (

    <div className="landing-footer container mt-5">
        <div className="row">
            <div className="col-sm-12 contact-bar">
            <div className="row no-padding">
                <div className="col-xs-12 col-sm-3 contact-support">
                    <h3 className="landing-footer-header">Contact Support</h3>
                    <p>Available 24 hours a day* Monday-Friday</p>
                </div>
                <div className="col-xs-12 col-sm-9 contact-details">
                            <div className="row no-padding">
                    <div className="col-xs-7 col-md-3">
                        <p><i className="fa fa-phone"></i> 1-844-700-DUTY</p>
                    </div>
                    <div className="col-xs-5 col-md-3">
                        <p><i className="fa fa-globe"></i> 1-415-805-7070</p>
                    </div>
                    <div className="col-xs-7 col-md-3">
                        <p><i className="fa fa-envelope-o"></i> <a href="mailto:support@pagerduty.com">
                        support@pagerduty.com</a>
                        </p>
                    </div>
                    <div className="col-xs-5 col-md-3">
                        <p><i className="fa fa-twitter"></i><a href="https://twitter.com/pagerdutyhelp">
                        @pagerdutyhelp</a></p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row csat-blurb">
            <div className="col-xs-12 col-sm-4 col-md-2">
                <img src={StevieAward} className="stevie-logo" alt="Stevie-Award"/>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-4">
                <h3 className="landing-footer-header">Award Winning Support</h3>
                <p className="landing-footer-blurb">
                Our goal is to help you get the maximum value out of PagerDuty. We're proud to have won multiple <a href="https://stevieawards.com/aba/customer-service-awards-2">Stevie® Awards for Customer Service</a>, and <a href="mailto:support@pagerduty.com">welcome your feedback</a> on how we're doing.
                </p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-2">
                <div id="rating-holder">
                    <CsatRating></CsatRating>
                </div>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-4">
                <h3 className="landing-footer-header">Satisfaction Rating</h3>
                <p className="landing-footer-blurb">
                We believe in transparency and earning customers for life. In the spirit of these core values, we're proud to share our team's current overall customer satisfaction rating. This number comes live, straight from our ticketing system.
                </p>
            </div>
        </div>
        <div>
            <p className="support-hours">
            * Our Customer Support team is available 24 hours a day starting 23:00 Sunday UTC and ending 1:00 Saturday UTC each week.
            </p>
        </div>
    </div>

)

export default LandingFooter