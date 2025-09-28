import { Category } from "../models/entities/Category";
// import { Inventory } from "../models/entities/Inventory";
import { User } from "../models/entities/User";
import { DataSource } from "typeorm";

export class TypeORMDataSource {
    private dataSource!: DataSource;
    private static instance: TypeORMDataSource;

    constructor() {

    }

    public static getInstance(): TypeORMDataSource {
        if(!TypeORMDataSource.instance) {
            TypeORMDataSource.instance = new TypeORMDataSource();
        }
        return TypeORMDataSource.instance;
    }

    public initalizeDataSource(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.dataSource = new DataSource({
                type: 'postgres',
                username: 'hardware_user',
                password: 'hardware_password',
                host: 'localhost',
                port: 5432,
                database: 'hardware_db',
                schema: 'hardware_schema',
                entities: [Category, User]
            })
            this.dataSource.initialize()
            .then((response) => {               
                resolve('Datasource initialized with TypeORM!')
            })
            .catch(error => {
                reject('Error connecting to datasource => ' + error);
            })
        })
    }

    public getDataSource(): DataSource {
        return this.dataSource;
    }
}