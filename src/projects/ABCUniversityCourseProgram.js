import React, { Component } from "react";
import ABCUniversityCourseProgramContainer from "./ABCUniversityCourseProgramContainer.js";

class ABCUniversityCourseProgram extends Component {
    render() {
        return (
            <div className="projectsDisplayContainerFlex">
                <ABCUniversityCourseProgramContainer />
                <div className="abcUniversityCourseProgramText">
                <h3>ABCUniversity Course Program | C++</h3>
                <p>This text-based program reads raw data from a university CSV file and structures it as a binary search tree, then offers the user options to 
efficiently traverse, search within, and insert course data into the tree. 
                </p>
                </div>
            </div>
        );
    }
}

export default ABCUniversityCourseProgram;