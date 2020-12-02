import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "./layout"
import 'font-awesome/css/font-awesome.min.css';
import "../styles/article-template.css"
import Callout from "./callout.js"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'

const shortcodes = { Link, Callout, Tab, Tabs, TabContainer } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout className="container mx-auto">
      <div className="container">
          <nav className="navbar subnav justify-content-between">
              <p className="breadcrumbs">Knowledge Base  &#x2192;  {mdx.frontmatter.title}</p>
              <form className="form-inline article-search">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
              </form>
          </nav>
          <div>
            <MDXProvider components={shortcodes}>
              <div className="article-body">
                <MDXRenderer>
                  {mdx.body}
                </MDXRenderer>
              </div>
            </MDXProvider>
          </div>
      </div>
    </Layout>
    )
}

export const pageQuery = graphql`
  query DocPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      tableOfContents
      frontmatter {
        title
      }
    }
  }
`
