import React, { Fragment, useEffect, useState } from "react";
import Navigation from "../Navigation";
import Logo from "../Logo";
import Headerright from "../Headerright"
import {Container, Row, Col} from "react-bootstrap"


const Header =()=>{
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
      }, []);

    return(
        <Fragment>
             <Container className={!scroll ? "headerDiv" : "headerDiv scroll" }   fixed="top" fluid>
                <Row>
                    <Col  xs={2}> <Logo /></Col>
                    <Col xs={7}> <Navigation /></Col>
                    <Col xs={3}><Headerright /></Col>
                </Row>               
                </Container>
            
            
        </Fragment>
    )
}

export default Header;