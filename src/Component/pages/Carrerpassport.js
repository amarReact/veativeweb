import React, { Fragment } from "react";
import {HiArrowNarrowRight} from "react-icons/hi";
import { Link } from "react-router-dom";
const Carrerpassport =()=>{
    return(
        <Fragment>
                   <div className="carpasDiv" id="carrerpassport">
                            <div className="carpasDivIn">
                                <h2>Carrer Passport</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum has been the industry's </p>
                                <Link className="setPas" to="/">Set up my carrer passport <HiArrowNarrowRight /></Link>
                                </div>
                                <div className="lettname">
                                <img src={process.env.PUBLIC_URL + '/images/letter.jpg'} alt="" />
                                </div>
                            
                        </div>
        </Fragment>
    )
}

export default Carrerpassport;