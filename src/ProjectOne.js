import React, { Component } from "react";
import ProjectOneContainer from "./ProjectOneContainer.js";
import ProjectTwoContainer from "./ProjectTwoContainer.js";
import ProjectThreeContainer from "./ProjectThreeContainer.js";

class ProjectOne extends Component {
    render() {
        return (
            <div className="projectsDisplayContainerFlex">
                <ProjectOneContainer />
                <div className="projectOneText">
                <h3>3D Interactive Desktop Scene | C++ (OpenGL)</h3>
                <p>This program uses OpenGL to create a 3D scene consisting of a desktop
                     and some objects. Users navigate the scene using intuitive keyboard 
                     and mouse controls.</p>
                </div>
            </div>
        );
    }
}

export default ProjectOne;