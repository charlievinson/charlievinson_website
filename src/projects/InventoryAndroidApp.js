import React, { Component } from "react";
import InventoryAndroidAppContainer from "./InventoryAndroidAppContainer.js";

class InventoryAndroidApp extends Component {
    render() {
        return (
            <div className="projectsDisplayContainerFlex">
                <InventoryAndroidAppContainer />
                <div className="inventoryAndroidAppText">
                <h3>Inventory App | Java, XML</h3>
                <p>Mobile application that utilizes two SQLite databases to authenticate
                    users and create virtual inventories for authorized users. Primary functions 
                    of the application include creating, deleting, and modifying the count of items 
                    in the inventory database. Developed for Android devices using at least API 26. </p>
                </div>
            </div>
        );
    }
}

export default InventoryAndroidApp;