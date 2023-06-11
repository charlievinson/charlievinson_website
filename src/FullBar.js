import React, { Component } from "react";
import BarContainer from "./BarContainer.js";
import BarBottomBorder from "./BarBottomBorder.js";

class FullBar extends Component {
    render() {
        return (
            <div className="fullBarId">
                <BarContainer />
                <BarBottomBorder />
            </div>
        );
    }
}

export default FullBar;