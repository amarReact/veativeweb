import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {HiArrowNarrowRight} from "react-icons/hi";

const Learninghub =()=>{
    return(
        <Fragment>
              <div className="carpasDiv" id="learninghub">
                            <div className="carpasDivIn">
                                <h2>Learning Hub</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum has been the industry's </p>
                                <Link className="setPas" to="/">Explore the learning hub <HiArrowNarrowRight /></Link>
                                </div>
                                <div className="lettname">
                                    <aside>Premium</aside>
                                <img src={process.env.PUBLIC_URL + '/images/letter.jpg'} alt="" />
                                </div>                            
                        </div>
        </Fragment>
    )
}

export default Learninghub;