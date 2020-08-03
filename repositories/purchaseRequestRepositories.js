const PurchaseRequest = require("../models/purchaseRequest");
const Inventory = require("../models/inventory");

/* function to add a new item to the purchaseRequest : 
-----------------------------------------------------*/

module.exports.createPurchaseRequest = async(purchaseRequest) =>{
    return new Promise((resolve, reject) => {
        PurchaseRequest.create(purchaseRequest)
            .then((purchaseRequest) => {
                resolve(purchaseRequest);
            })
            .catch(error => {
                reject(error);
            });
    });
};

/* function to edit purchaseRequest
---------------------------------------------------*/

module.exports.editPurchaseRequest = async(purchaseRequest) => {
    return new Promise( (resolve, reject) => {
        PurchaseRequest.update({
            // what to update
        },
        {
            // "where" to update
        })
            .then( (purchaseRequest) => {
                resolve(purchaseRequest);
            })
            .catch( error => {
                reject(error);
            });
    });
};

/* function to view purchaseRequest
---------------------------------------------------*/

module.exports.viewPurchaseRequest = async(purchaseRequest) => {
    return new Promise( (resolve, reject) => {
        PurchaseRequest.findAll()
            .then( (purchaseRequest) => {
                resolve(purchaseRequest);
            })
            .catch( error => {
                reject(error);
            });
    });
};

/* function to view linked inventory
---------------------------------------------------*/

module.exports.viewLinkedInventory = async(purchaseRequest) => {
    return new Promise( (resolve, reject) => {
        Inventory.findAll(
            {
                where : {
                    assetId: purchaseRequest.assetId,
                    modelId: purchaseRequest.modelId
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

/* function to delete purchaseRequest
---------------------------------------------------*/

module.exports.deletePurchaseRequest = async(purchaseRequest) => {
    return new Promise( (resolve, reject) => {
        
    });
};

/* function to filter purchaseRequest
---------------------------------------------------*/

module.exports.filterPurchaseRequest = async(purchaseRequest) => {
    return new Promise( (resolve, reject) => {

    });
};

/* function to search purchaseRequest
---------------------------------------------------*/

module.exports.searchPurchaseRequest = async(purchaseRequest) => {
    return new Promise( (resolve, reject) => {

    });
};

/* function to sort purchaseRequest
---------------------------------------------------*/

module.exports.sortPurchaseRequest = async(purchaseRequest) => {
    return new Promise( (resolve, reject) => {

    });
};