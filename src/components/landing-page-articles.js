import React from "react"

const LandingPageArticles = () => (
    <div className="container landing-articles">

        <div className="row mb-5 justify-content-md-center">

            <div className="col-lg-4">
                <h6 className="pb-1 mb-1 mx-3"><a href="/docs/introduction">Getting Started</a></h6>
                <div class="list-group">
                    <a href="/docs/introduction" class="list-group-item list-group-item-action">Introduction</a>
                    <a href="/docs/glossary" class="list-group-item list-group-item-action">Glossary</a>
                    <a href="/docs/quick-start-guide" class="list-group-item list-group-item-action">Quick Start Guide</a>
                    <a href="/docs/introduction" class="list-group-item list-group-item-action">→ View  All</a>
                </div>

            </div>
            <div className="col-lg-4">
                <h6 className="pb-1 mb-1 mx-3"><a href="/docs/incidents">Incidents and Alerts</a></h6>
                <div class="list-group">
                    <a href="/docs/incidents" class="list-group-item list-group-item-action">Incidents</a>
                    <a href="/docs/alerts" class="list-group-item list-group-item-action">Alerts</a>
                    <a href="/docs/mobilize-a-coordinated-response" class="list-group-item list-group-item-action">Mobilize a Coordinated Response</a>
                    <a href="/docs/incidents" class="list-group-item list-group-item-action">→ View  All</a>
                </div>

            </div>

        </div>
        <div className="row mb-4 justify-content-md-center">

            <div className="col-lg-4">
                <h6 className="pb-1 mb-1 mx-3"><a href="/docs/services-and-integrations">Services and Integrations</a></h6>
                <div className="list-group">
                    <a href="/docs/services-and-integrations" class="list-group-item list-group-item-action">Services and Integrations Basics</a>
                    <a href="/docs/service-settings" class="list-group-item list-group-item-action">Configurable Service Settings</a>
                    <a href="/docs/business-services" class="list-group-item list-group-item-action">Business Services</a>
                    <a href="/docs/services-and-integrations" class="list-group-item list-group-item-action">→ View  All</a>
                </div>

            </div>
            <div className="col-lg-4">
                <h6 className="pb-1 mb-1 mx-3"><a href="/docs/billing-invoices-payments">Account Management</a></h6>
                <div className="list-group">
                    <a href="/docs/billing-invoices-payments" class="list-group-item list-group-item-action">Billing, Invoices, and Payments</a>
                    <a href="/docs/change-account-owner" class="list-group-item list-group-item-action">Account Ownership</a>
                    <a href="/docs/users" class="list-group-item list-group-item-action">Adding and Removing Users</a>
                    <a href="/docs/billing-invoices-payments" class="list-group-item list-group-item-action">→ View  All</a>
                </div>

            </div>

        </div>
        <div className="row mb-4 justify-content-md-center">
            <a href="/docs/introduction" id="browse-all-link">Browse All Topics →</a>
        </div>
    </div>
)


export default LandingPageArticles
