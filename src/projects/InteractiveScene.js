import React, { Component } from "react";
import InteractiveSceneContainer from "./InteractiveSceneContainer.js";

class InteractiveScene extends Component {
    render() {
        return (
            <div className="projectsDisplayContainerFlex">
                <InteractiveSceneContainer />
                <div className="interactiveSceneText">
                <h3>3D Interactive Desktop Scene | C++ (OpenGL)</h3>
                <p>This program uses OpenGL to create a 3D scene consisting of a desktop
                     and some objects. Users navigate the scene using intuitive keyboard 
                     and mouse controls.</p>
                </div>
            </div>
        );
    }
}

export default InteractiveScene;