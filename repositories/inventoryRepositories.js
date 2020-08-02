const Inventory = require("../models/inventory");
/* May require these:

const DamagedInventory = require("../models/damagedInventory");
const IncomingInventory = require("../models/incomingInventory");
const OutgoingInventory = require("../models/outgoingInventory");

*/

/* function to add a new item to the inventory : 
-----------------------------------------------------*/

module.exports.createInventory = async(inventory) =>{
    return new Promise((resolve, reject) => {
        Inventory.create(inventory)
            .then((inventory) => {
                resolve(inventory);
            })
            .catch(error => {
                reject(error);
            });
    });
};

/* function to edit inventory
---------------------------------------------------*/

module.exports.editInventory = async(inventory) => {
    return new Promise( (resolve, reject) => {
        Inventory.update({
            // what to update
        },
        {
            // "where" to update
        })
            .then( (inventory) => {
                resolve(inventory);
            })
            .catch( error => {
                reject(error);
            });
    });
};

/* function to view inventory
---------------------------------------------------*/

module.exports.viewInventory = async(inventory) => {
    return new Promise( (resolve, reject) => {
        Inventory.findAll()
            .then( (inventory) => {
                resolve(inventory);
            })
            .catch( error => {
                reject(error);
            });
    });
};

/* function to view linked inventory
---------------------------------------------------*/

module.exports.viewLinkedInventory = async(inventory) => {
    return new Promise( (resolve, reject) => {
        Inventory.findAll(
            {
                where : {
                    assetId: inventory.assetId
                }
            }
            )
            .then( (inventory) => {
                resolve(inventory);
            })
            .catch( error => {
                reject(error);
            });
    });
};

/* function to delete inventory
---------------------------------------------------*/

module.exports.deleteInventory = async(inventory) => {
    return new Promise( (resolve, reject) => {
        
    });
};

/* function to filter inventory
---------------------------------------------------*/

module.exports.filterInventory = async(inventory) => {
    return new Promise( (resolve, reject) => {

    });
};

/* function to search inventory
---------------------------------------------------*/

module.exports.searchInventory = async(inventory) => {
    return new Promise( (resolve, reject) => {

    });
};

/* function to sort inventory
---------------------------------------------------*/

module.exports.sortInventory = async(inventory) => {
    return new Promise( (resolve, reject) => {

    });
};
