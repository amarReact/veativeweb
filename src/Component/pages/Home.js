import React, { Fragment, useEffect } from "react";
import {Container, Row} from "react-bootstrap";
import { BsPencil} from "react-icons/bs";
import {FiAward} from "react-icons/fi"
import Carrerpassport from "./Carrerpassport";
import Carrerpathways from "./Carrerpathways";
import Learninghub from "./Learninghub";



const Home =()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <Fragment>
              <Container fluid>
                <Row>
                    <div className="bannerDiv" id="home">
                        <h2>Hi Smithy!<BsPencil /></h2>
                          <img src={process.env.PUBLIC_URL + '/images/lionImg.png'} alt="" />
                          <ul class="awords">
                              <li><FiAward /></li>
                              <li class="disable"><FiAward /></li>
                              <li class="disable"><FiAward /></li>
                          </ul>
                          <div className="showAword">Your LYC achievements</div>
                    </div>

                    <div className="middlediv">
                        <Carrerpathways />
                        <Carrerpassport />
                        <Learninghub />                    
                    </div>
                    
                </Row>
               
                </Container>
        </Fragment>
    )
}

export default Home;