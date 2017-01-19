import { IdType, IObjectStore } from 'boc-interfaces';
import { DataDriver, IDataDriverOptions } from 'mdr-data-driver';

export class MdrObjectStore implements IObjectStore {
    private static convertFilterToOdataFilter(filter: any): string {
        return 'todo';
    }

    private dataDriver: DataDriver;

    constructor(dataDriverOptions: IDataDriverOptions) {
        this.dataDriver = new DataDriver(dataDriverOptions);
    }

    public getOne(collectionKey: any, filter: any): Promise<any> {
        return this.getOneOrMany(this.dataDriver.getOne, collectionKey, filter);
    }

    public getMany(collectionKey: any, filter: any): Promise<any[]> {
        return this.getOneOrMany(this.dataDriver.getMany, collectionKey, filter);
    }

    public getNewId(collectionKey: any): Promise<IdType> {
        // todo
        throw new Error('todo');
    }

    public reset(): void {
        // nothing to do
    }

    private getOneOrMany(f: (c: string, f: string) => Promise<any>, collectionKey: any, filter: any): Promise<any> {
        const mdrFilter: string = MdrObjectStore.convertFilterToOdataFilter(filter);
        const collection: string = collectionKey as string;
        return f.call(this.dataDriver, collection, mdrFilter);
    }
}
