import React, { Fragment, useState } from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";


const Logo =()=>{
  
    const [click, setClick] = useState(false)

    const handleClick=()=>{
        setClick(!click)
    }

    return(
        
        <Fragment>            
            <Link className="tryBtn" to="/" >Try Premium</Link>
            <div className="clickUserbtn">
                <Button onClick={handleClick} className="clickUserbtnIn" variant="link" ><span>s</span> <b>Smithy</b> { click ? <BsChevronUp />: <BsChevronDown />}</Button>
                {
                   click ?                 
                <div className="dropdowns" >
                <ul>
                    <li>Home</li>
                    <li>My Profile</li>
                    <li>My spirit animal</li>
                    <li>My LTC awards</li>
                </ul>
                <Link className="logoutBtn" to="/" >Log Out</Link>
                </div> : ""
                 }
            </div>
            
        </Fragment>
    )
}

export default Logo;