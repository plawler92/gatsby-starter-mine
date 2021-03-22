import React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => {    
    return (
    <header>        
    </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: `Implement Me`,
}

export default Header