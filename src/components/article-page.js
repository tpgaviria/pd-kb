import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTemplate from "../components/article-template"

const ArticlePage = () => (
  <Layout>
    <SEO title="PagerDuty Knowledge Base" />
    <PageTemplate />
  </Layout>
)

export default ArticlePage