import React, { Component } from "react";
import Empty from "./Empty";
import Box from "./Box.js";
import NextBox from "./NextBox.js";
import ThirdBox from "./ThirdBox.js";
import FourthBox from "./FourthBox.js";
import Navigate from "./Navigate.js";
import NavigateBottom from "./NavigateBottom.js";

class Main extends Component {
    render() {
        return (
            <div>
                <Empty/>
                <h>Charlie Vinson</h>
                <Box/>
                <NextBox/>
                <ThirdBox/>
                <FourthBox/>
            </div>
        );
    }
}

export default Main;