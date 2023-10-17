import React, { Component } from "react";
import DiceGameSimulatorContainer from "./DiceGameSimulatorContainer.js";

class DiceGameSimulator extends Component {
    render() {
        return (
            <div className="projectsDisplayContainerFlex">
                <DiceGameSimulatorContainer />
                <div className="diceGameSimulatorText">
                <h3>Loaded Dice | C++ (OpenGL)</h3>
                <p>This dice game simulator can be won if the same number appears after five consecutive rolls of a die.
                The program plays against itself until it wins 20 times. The total number of plays necessary to win each game
                is stored in a vector, then data from these 20 games is extracted and visualized as a text-based histogram.</p>
                </div>
            </div>
        );
    }
}

export default DiceGameSimulator;