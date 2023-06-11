import React, { Component } from "react";

class LinkBar extends Component {
    render() {
        return (
            <div className="linkBarFlex">
                <h1 className="link"><a href="http://www.github.com/charlievinson" target="_blank">github</a></h1>
                <h1 className="link"><a href="http://www.linkedin.com/in/charlie-vinson-13337b255/" target="_blank">linkedin</a></h1>
                <h1 className="link"><a href="mailto:charlie.vinson@snhu.edu?Subject=Hello%20Charlie">contact</a></h1>
            </div>
        );
    }
}

export default LinkBar;