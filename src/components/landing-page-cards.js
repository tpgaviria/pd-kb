import React from "react"

const LandingPageCards = () => (
    <div className="container px-5">
        <div className="card-deck landing-page-cards">
            <div className="card card1">
                <a className="text-decoration-none" href="https://www.pagerduty.com/integrations/"> </a>
                    <div className="card-body pb-0">
                        <h4 className="card-title">Integration Guides</h4>
                        <p className="card-text">As part of PagerDuty’s 350+ platform integrations, the PagerDuty Integration Partner Program’s Verified integrations constitute a select tier in the industry’s largest ecosystem of native integrations.</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn">Go to Guides</button>
                    </div>
                

            </div>
            <div className="card card2">
                <a className="text-decoration-none" href="https://developer.pagerduty.com/docs/get-started/getting-started/"> </a>
                    <div className="card-body pb-0">
                        <h4 className="card-title">Developer Docs</h4>
                        <p className="card-text">Whether you’re building a widget for your team or a first-class product for the enterprise, PagerDuty’s Developer Platform makes it easy to build real-time workflows into your application and meet the expectations of a world that’s always on.<br /><br /></p>


                    </div>
                    <div className="card-footer">
                        <button className="btn">See the Docs</button>
                    </div>
            </div>
            <div className="card card3">
                <a className="text-decoration-none" href="https://community.pagerduty.com/forum/"> </a>

                    <div className="card-body pb-0">
                        <h4 className="card-title">Community & Best Practices</h4>
                        <p className="card-text">The place to discuss all things PagerDuty, such as incident response, postmortems, or analytics. Get help configuring your account, find out what other are using PagerDuty for.</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn">Go to Community</button>
                    </div>
            </div>
            <div className="card card4">
                <a className="text-decoration-none" href="https://www.pagerduty.com/university/"> </a>

                    <div className="card-body pb-0">
                        <h4 className="card-title">PagerDuty University</h4>
                        <p className="card-text">PagerDuty's customer training program provides technical training to current and prospective customers on the use of the PagerDuty platform.</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn">Learn More</button>
                    </div>
            </div>
        </div>
    </div>

)


export default LandingPageCards
