import React, { Fragment } from "react";
import Buttonglobal from "./Buttonglobal";
import { BsPencil} from "react-icons/bs";
import {FaHandPaper} from "react-icons/fa";
import {BiChevronRight} from "react-icons/bi";
import { Link } from "react-router-dom";
const Carrerpathways =()=>{
    return(
        <Fragment>
            <div className="carrerDiv"  id="carrerpathways">
                            <div class="leftacrr">
                            <h2>52 Carrer Pathways!</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry. </p>
                            <Link className="expclass" to="/">Explore Carrer Pathways <BiChevronRight /></Link>
                            </div>
                            <div className="rightcarr">
                                <p><b>Top Matches</b></p>
                                <div className="wrapBtn">
                                <Buttonglobal text="Vet" />
                                <Buttonglobal text="Astronaut" />
                                <Buttonglobal text="Fireman" />
                                <Buttonglobal text="Musician" />
                                <Buttonglobal text="Dancer" />
                                <Buttonglobal text="Scientist" />
                                </div>
                            </div>
                        </div>
             <div className="passportdiv">
                            <div className="passportleft">
                                <h2>What Type of tiger are you? <BsPencil /></h2>
                                <aside>
                                    <hgroup>
                                    <p><b>You Like:</b></p>
                                    <Buttonglobal text="working outdoor" />
                                    <Buttonglobal text="Sports" />
                                    <Buttonglobal text="Travel" />
                                    <Buttonglobal text="Science" />
                                    </hgroup>
                                    <hgroup>
                                    <p><b>You'ar good at:</b></p>
                                    <Buttonglobal text="working outdoor" />
                                    <Buttonglobal text="Sports" />
                                    <Buttonglobal text="Travel" />
                                    <Buttonglobal text="Science" />
                                    </hgroup>
                                </aside>
                            </div>
                            <div className="passportright">
                              <h2>Tigers At work <BsPencil /></h2>
                                <aside><FaHandPaper /></aside>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been . </p>
                            </div>
                        </div>
        </Fragment>
    )
}

export default Carrerpathways;