import React, { Component } from "react";
import NameBar from "./NameBar.js";
import LinkBar from "./LinkBar.js";

class BarContainer extends Component {
    render() {
        return (
            <div className="barContainerFlex">
                <NameBar />
                <LinkBar />
            </div>
        );
    }
}

export default BarContainer;