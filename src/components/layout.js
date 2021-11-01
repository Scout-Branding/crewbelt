/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ThemeStyles from "../styles/theme-styles"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          portalLink
          appLinks {
            ios
            microsoft
          }
        }
      }
    }
  `)

  const meta = data.site.siteMetadata

  return (
    <>
      <ThemeStyles />
      <Header
        siteTitle={meta?.title || `Title`}
        portalLink={meta?.portalLink || ``}
        appLinks={meta?.appLinks || {}}
      />
      <main>{children}</main>
      <Footer
        portalLink={meta?.portalLink || ``}
        appLinks={meta?.appLinks || {}}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
