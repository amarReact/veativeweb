import React, { Fragment, useState } from "react";
import {Navbar, Nav} from "react-bootstrap"
import {HashLink as Link} from "react-router-hash-link"
import { BsFillHeartFill } from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"

const Navigation =()=>{
    const [menu, setMenu] = useState(false);
    const menuClick =()=>{
        setMenu(!menu)
    }

    return(
        <Fragment>
         
            <Navbar className="nabbardv">
            <div className="clickmenu" onClick={menuClick}>{menu ? <GiHamburgerMenu /> :  <AiOutlineClose />}</div>
            {
                !menu ? <Nav className="nabbardvIn">
                <ul>
                      <li><Link smooth to="#home" >Home</Link></li>
                      <li><Link smooth to="#carrerpathways" >Carrer Pathways</Link></li>
                      <li><Link smooth to="#carrerpassport" >Carrer Passport</Link></li>
                      <li><Link smooth to="#learninghub" >Learning Hub</Link></li>
                      <li><Link smooth to="/" ><BsFillHeartFill />Favourites</Link></li>
                  </ul>
                  </Nav>  : " "
            }
            
              </Navbar>
        </Fragment>
    )
}

export default Navigation;