import React, { Component } from "react";
import ProjectFourContainer from "./ProjectFourContainer.js";

class ProjectFour extends Component {
    render() {
        return (
            <div className="projectsDisplayContainerFlex">
                <ProjectFourContainer />
                <div className="projectFourText">
                <h3>Two Sum GUI | C++/CLI</h3>
                <p>This simple application allows a user to enter a list of integers and a 
                    target number. If two elements in the list sum to the target number, the
                    indices of these elements are returned. Otherwise, zeros are returned.</p>
                </div>
            </div>
        );
    }
}

export default ProjectFour;