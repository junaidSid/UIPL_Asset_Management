const Supplier = require("../models/supplier");

/* function to add a new item to the supplier : 
-----------------------------------------------------*/

module.exports.createSupplier = async(supplier) =>{
    return new Promise((resolve, reject) => {
        Supplier.create(supplier)
            .then((supplier) => {
                resolve(supplier);
            })
            .catch(error => {
                reject(error);
            });
    });
};

/* function to edit supplier
---------------------------------------------------*/

module.exports.editSupplier = async(supplier) => {
    return new Promise( (resolve, reject) => {
        Supplier.update({
            // what to update
        },
        {
            // "where" to update
        })
            .then( (supplier) => {
                resolve(supplier);
            })
            .catch( error => {
                reject(error);
            });
    });
};

/* function to view supplier
---------------------------------------------------*/

module.exports.viewSupplier = async(supplier) => {
    return new Promise( (resolve, reject) => {
        Supplier.findAll()
            .then( (supplier) => {
                resolve(supplier);
            })
            .catch( error => {
                reject(error);
            });
    });
};

/* function to delete supplier
---------------------------------------------------*/

module.exports.deleteSupplier = async(supplier) => {
    return new Promise( (resolve, reject) => {
        
    });
};

/* function to filter supplier
---------------------------------------------------*/

module.exports.filterSupplier = async(supplier) => {
    return new Promise( (resolve, reject) => {

    });
};

/* function to search supplier
---------------------------------------------------*/

module.exports.searchSupplier = async(supplier) => {
    return new Promise( (resolve, reject) => {

    });
};

/* function to sort supplier
---------------------------------------------------*/

module.exports.sortSupplier = async(supplier) => {
    return new Promise( (resolve, reject) => {

    });
};