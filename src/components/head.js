import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title, siteTitle }) => {

    return (
        <Helmet title={`${title} | ${siteTitle}`} />
    )
}

export default Head