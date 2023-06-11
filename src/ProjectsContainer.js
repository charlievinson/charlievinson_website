import React, { Component } from "react";
import ProjectsLabelFlex from "./ProjectsLabelFlex.js";
import ProjectsDisplayContainerFlex from "./ProjectsDisplayContainerFlex.js";
import ArrowsFlex from "./ArrowsFlex.js";

class ProjectsContainer extends Component {
    render() {
        return (
            <div className="projectsContainerId">
                <ProjectsLabelFlex />
                <ProjectsDisplayContainerFlex />
                <ArrowsFlex />
            </div>
        );
    }
}

export default ProjectsContainer;