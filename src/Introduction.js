import React, { Component } from "react";
import Text from "./Text.js";
import InteractiveScene from "./projects/InteractiveScene.js";
import TwoSumInterface from "./projects/TwoSumInterface.js";
import GrandStrandSystemsTesting from "./projects/GrandStrandSystemsTesting.js";
import BrickSmash from "./projects/BrickSmash.js";
import SysTecSmartThermostat from "./projects/SysTecSmartThermostat.js";
import DiceGameSimulator from "./projects/DiceGameSimulator.js";
import ABCUniversityCourseProgram from "./projects/ABCUniversityCourseProgram.js";
import InventoryAndroidApp from "./projects/InventoryAndroidApp.js";
import GraziosoSalvareDashboard from "./projects/GraziosoSalvareDashboard.js";

class Introduction extends Component {
    render() {
        return (
            <div className="introductionContainer">
                <Text />
                <GraziosoSalvareDashboard />
                <InventoryAndroidApp />
                <SysTecSmartThermostat />
                <InteractiveScene />
                <DiceGameSimulator />
                <BrickSmash />
                <GrandStrandSystemsTesting />
                <TwoSumInterface />
                <ABCUniversityCourseProgram />
            </div>
        );
    }
}

export default Introduction;