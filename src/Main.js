import React, { Component } from "react";
import FullBar from "./navbar_components/FullBar.js";
import Introduction from "./Introduction.js";


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