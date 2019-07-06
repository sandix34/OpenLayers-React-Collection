/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"

import Background from "../components/background"

const Layout = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Background></Background>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            textAlign: "center",
            padding: "4em",
          }}
        >
          <Link
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: '2em',
            }}
            to="/docs"
          >
            Voir les exemples
          </Link>
        </div>

        <footer style={{ textAlign: "center" }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org/tutorial/writing-documentation-with-docz/">
            Gatsby-Docz
          </a>
        </footer>
      </>
    )}
  />
)

export default Layout
