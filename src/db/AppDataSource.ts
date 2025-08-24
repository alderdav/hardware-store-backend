import pg, { Pool } from 'pg';

export class AppDataSource {

    private static instance: AppDataSource;
    private dataSource!: Pool;

    private constructor() {

    }

    public static getInstance(): AppDataSource {
        if(!AppDataSource.instance) {
            AppDataSource.instance = new AppDataSource();
        }
        return AppDataSource.instance;
    }

    public initializeDataSource(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.dataSource = new Pool({
                user: 'hardware_user',
                password: 'hardware_password',
                host: 'localhost',
                port: 5432,
                database: 'hardware_db',
            });
            this.dataSource.connect()
            .then((res) => {
                resolve("Connected to datasource! " + res);
            }, rejection => {
                throw new Error(rejection);
            })
            .catch((error) => {
                reject("Issue connecting to datasource. " + error);
            })
        })
    }

    public getDataSource(): Pool {
        return this.dataSource;
    }
}