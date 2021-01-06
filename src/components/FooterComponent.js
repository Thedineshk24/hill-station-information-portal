import React from 'react';
import {
    Container,
    Footer
} from "reactstrap"

import Logo from "../assets/logo/hillstation_logo.png";

const FooterComponent = () => {
    return (
        <Container 
        fluid
        tag="footer" 
        className="text-center text-white text-uppercase footer">
            
        &copy; Made with ❤️ by <img src={Logo} />
        </Container>
    )
}

export default FooterComponent
