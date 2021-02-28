import React, { Fragment } from "react";
import {HashLink as Link} from "react-router-hash-link"
const Logo =()=>{
    return(
        <Fragment>
            <Link  smooth className="logodiv" to="#home" ><img src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt="" /></Link>
        </Fragment>
    )
}

export default Logo;