import React, { Component } from "react";
import SysTecSmartThermostatContainer from "./SysTecSmartThermostatContainer.js";

class SysTecSmartThermostat extends Component {
    render() {
        return (
            <div className="projectsDisplayContainerFlex">
                <SysTecSmartThermostatContainer />
                <div className="sysTecSmartThermostatText">
                <h3>SysTec Smart Thermostat | Embedded C</h3>
                <p>This program, developed for a TI MCU, reads the temperature of an area using a TMP006 temperature
                     sensor via I2C. Users can change the set temperature using buttons via GPIO interrupt, an LED 
                     indicates when the temperature is set to increase via GPIO, and data from the thermostat is 
                     sent to the server via UART.</p>
                </div>
            </div>
        );
    }
}

export default SysTecSmartThermostat;