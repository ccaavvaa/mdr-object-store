"use strict";
const mdr_data_driver_1 = require("mdr-data-driver");
class MdrObjectStore {
    static convertFilterToOdataFilter(filter) {
        return 'todo';
    }
    constructor(dataDriverOptions) {
        this.dataDriver = new mdr_data_driver_1.DataDriver(dataDriverOptions);
    }
    getOne(collectionKey, filter) {
        return this.getOneOrMany(this.dataDriver.getOne, collectionKey, filter);
    }
    getMany(collectionKey, filter) {
        return this.getOneOrMany(this.dataDriver.getMany, collectionKey, filter);
    }
    getNewId(collectionKey) {
        throw new Error('todo');
    }
    reset() {
    }
    getOneOrMany(f, collectionKey, filter) {
        const mdrFilter = MdrObjectStore.convertFilterToOdataFilter(filter);
        const collection = collectionKey;
        return f.call(this.dataDriver, collection, mdrFilter);
    }
}
exports.MdrObjectStore = MdrObjectStore;
//# sourceMappingURL=object-store.js.map