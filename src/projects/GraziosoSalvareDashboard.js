import React, { Component } from "react";
import GraziosoSalvareDashboardContainer from "./GraziosoSalvareDashboardContainer.js";

class GraziosoSalvareDashboard extends Component {
    render() {
        return (
            <div className="projectsDisplayContainerFlex">
                <GraziosoSalvareDashboardContainer />
                <div className="graziosoSalvareDashboardText">
                <h3>Grazioso Salvare Interactive Dashboard | Python, MongoDB</h3>
                <p>Interactive dashboard that implements a reusable Python CRUD module and the
                    Dash framework to display documents from a database. Users can filter the results
                    returned by the database, as well as view important statistics and data related to 
                    each document.
                </p>
                </div>
            </div>
        );
    }
}

export default GraziosoSalvareDashboard;