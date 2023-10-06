import React, { Component } from "react";
import FullBar from "./FullBar.js";
import Introduction from "./Introduction.js";
import ProjectsDisplayContainerFlex from "./ProjectsDisplayContainerFlex.js";


class Main extends Component {
    render() {
        return (    
                <div className="containerFlex">
                    <FullBar />
                    <Introduction />
                </div>
        );
    }
}

export default Main;