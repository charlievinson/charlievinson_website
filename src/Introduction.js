import React, { Component } from "react";
import Text from "./Text.js";
import ProjectsDisplayContainerFlex from "./ProjectsDisplayContainerFlex.js";
import ProjectOneContainer from "./ProjectOneContainer.js";
import ProjectOne from "./ProjectOne.js";
import ProjectTwo from "./ProjectTwo.js";
import ProjectThree from "./ProjectThree.js";
import ProjectFour from "./ProjectFour.js";

class Introduction extends Component {
    render() {
        return (
            <div className="introductionContainer">
                <Text />
                <ProjectOne />
                <ProjectTwo />
                <ProjectThree />
                <ProjectFour />
            </div>
        );
    }
}

export default Introduction;