import React, { Component } from "react";
import FullBar from "./FullBar.js";
import Introduction from "./Introduction.js";
import ProjectsContainer from "./ProjectsContainer.js";


class Main extends Component {
    render() {
        return (    
                <div className="containerFlex">
                    <FullBar />
                    <Introduction />
                    <ProjectsContainer />
                </div>
        );
    }
}

export default Main;