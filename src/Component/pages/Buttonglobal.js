import React, { Fragment } from "react";
import {Button} from "react-bootstrap";
const Buttonglobal =(props)=>{
    return(
        <Fragment>
              <Button className="globalBtn" variant="link">{props.text}</Button>
        </Fragment>
    )
}

export default Buttonglobal;