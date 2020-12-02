import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPageContainer from "../components/landing-page-container"
import LandingFooter from "../components/landing-page-footer"

const IndexPage = () => (
  <Layout>
    <SEO title="PagerDuty Knowledge Base" />
    <LandingPageContainer />
    <LandingFooter />
  </Layout>
)

export default IndexPage