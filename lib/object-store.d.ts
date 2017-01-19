import { IdType, IObjectStore } from 'boc-interfaces';
import { IDataDriverOptions } from 'mdr-data-driver';
export declare class MdrObjectStore implements IObjectStore {
    private static convertFilterToOdataFilter(filter);
    private dataDriver;
    constructor(dataDriverOptions: IDataDriverOptions);
    getOne(collectionKey: any, filter: any): Promise<any>;
    getMany(collectionKey: any, filter: any): Promise<any[]>;
    getNewId(collectionKey: any): Promise<IdType>;
    reset(): void;
    private getOneOrMany(f, collectionKey, filter);
}
