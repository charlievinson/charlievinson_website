import React, { Component } from "react";
import ProjectOneContainer from "./ProjectOneContainer.js";
import ProjectTwoContainer from "./ProjectTwoContainer.js";
import ProjectThreeContainer from "./ProjectThreeContainer.js";

class ProjectsDisplayContainerFlex extends Component {
    render() {
        return (
            <div className="projectsDisplayContainerFlex">
                <ProjectOneContainer />
                <div className="projectOneText">
                <h3>Two Sum GUI | C++/CLI</h3>
                <p>This simple application allows a user to enter a list of integers and a 
                    target number. If two elements in the list sum to the target number, the
                    indices of these elements are returned. Otherwise, zeros are returned.</p>
                </div>
            </div>
        );
    }
}

export default ProjectsDisplayContainerFlex;