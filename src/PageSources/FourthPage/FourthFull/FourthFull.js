import React from "react";
import "./FourthFull.css"
import FourthFirst from "../FourthComponents/FourthFirst";
import FourthSecond from "../FourthComponents/FourthSecond";
import Cv from "../../CV/Cv";

const FourtFull = () => {
    return(
        <div className="Fourth--Main">
            <FourthFirst />
            <FourthSecond />
            <Cv />
        </div>
    )
}

export default FourtFull