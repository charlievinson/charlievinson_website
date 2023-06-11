import React, { Component } from "react";
import ProjectOne from "./ProjectOne.js";
import ProjectTwo from "./ProjectTwo.js";
import ProjectThree from "./ProjectThree.js";

class ProjectsDisplayContainerFlex extends Component {
    render() {
        return (
            <div className="projectsDisplayContainerFlex">
                <ProjectOne />
                <ProjectTwo />
                <ProjectThree />
            </div>
        );
    }
}

export default ProjectsDisplayContainerFlex;