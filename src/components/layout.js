import React from "react"
import PropTypes from "prop-types"
import Footer from "../components/footer"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"
import Head from "../components/head";


const Layout = ({ title, children }) => {
    const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
        site {
          siteMetadata {
            title
          }
        }
      }      
    `)

    return (
        <div>
            <Head title={title} siteTitle={data.site.siteMetadata?.title} />
            <Header siteTitle={data.site.siteMetadata?.title}/>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout