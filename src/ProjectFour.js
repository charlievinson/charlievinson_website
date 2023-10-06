import React, { Component } from "react";
import ProjectFourContainer from "./ProjectFourContainer.js";

class ProjectFour extends Component {
    render() {
        return (
            <div className="projectsDisplayContainerFlex">
                <ProjectFourContainer />
                <div className="projectFourText">
                <h3>Brick Smash Game | C++ (OpenGL)</h3>
                <p>This simple brick smashing game allows a player move a platform
                    in four directions using intuitive keyboard controls to smash 
                    bricks with a ball that moves at a variable speed. The program 
                    tracks the player's score and resets the game if the player 
                    misses the ball.
                </p>
                </div>
            </div>
        );
    }
}

export default ProjectFour;