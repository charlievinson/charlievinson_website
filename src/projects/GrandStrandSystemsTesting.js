import React, { Component } from "react";
import GrandStrandSystemsTestingContainer from "./GrandStrandSystemsTestingContainer.js";

class GrandStrandSystemsTesting extends Component {
    render() {
        return (
            <div className="projectsDisplayContainerFlex">
                <GrandStrandSystemsTestingContainer />
                <div className="grandStrandSystemsTestingText">
                <h3>Grand Strand Systems Testing | Java</h3>
                <p>Developed and tested a back-end mobile application for Grand
                    Strand Systems that includes contact, task, appointment, and 
                    service classes. JUnit tests verify that the software meets 
                    the project requirements with coverage of over 80%.</p>
                </div>
            </div>
        );
    }
}

export default GrandStrandSystemsTesting;