import React, { Component } from "react";
import TwoSumInterfaceContainer from "./TwoSumInterfaceContainer.js";

class TwoSumInterface extends Component {
    render() {
        return (
            <div className="projectsDisplayContainerFlex">
                <TwoSumInterfaceContainer />
                <div className="twoSumInterfaceText">
                <h3>Two Sum Interface | C++/CLI</h3>
                <p>This simple application allows a user to enter a list of integers and a 
                    target number. If two elements in the list sum to the target number, the
                    indices of these elements are returned. Otherwise, zeros are returned.</p>
                </div>
            </div>
        );
    }
}

export default TwoSumInterface;