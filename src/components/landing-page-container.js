import React from "react"
import "../styles/landing-page-container.css"

import LandingPageSearch from "./landing-page-search"
import LandingPageCards from "./landing-page-cards"
import LandingPageArticles from "./landing-page-articles"

const LandingPageContainer = () => (
    <div className="container-fluid p-0 landing-container">
        <LandingPageSearch />
        <div className="container">
            <LandingPageArticles />
            <LandingPageCards />
        </div>
    </div>
)

export default LandingPageContainer
