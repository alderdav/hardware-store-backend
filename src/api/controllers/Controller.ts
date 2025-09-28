import { Request, Response } from "express";
import { Pool } from "pg";
import { AppDataSource } from "../../db/AppDataSource";
import { getInventoryQuery, getSpecificPurchaseDetailsQuery, getPurchasesByUserQuery, insertUser } from "../../db/queries/Queries";
import { InsertUserBody } from "../../models/http/InsertUserBody";
import { TypeORMDataSource } from "../../db/TypeORMDataSource";
import { DataSource } from "typeorm";
import { Category } from "../../models/entities/Category";

export class Controller {

    private dataSource: Pool;
    private dataSourceORM: DataSource;

    constructor() {
        this.dataSource = AppDataSource.getInstance().getDataSource();
        this.dataSourceORM = TypeORMDataSource.getInstance().getDataSource();
    }

    public getVendors(req: Request, res: Response) {
        const promise = new Promise((resolve, reject) => {
            this.dataSource.query('SELECT * FROM hardware_schema.vendors')
                .then(response => {
                    resolve(response['rows']);
                }, rejection => {
                    reject("There was an issue? " + rejection);
                })
        })
        promise.then(data => {
            res.send(data)
        })
        promise.catch(error => {
            console.error("Error => " + error);
        })
    }

    public getUsers(req: Request, res: Response) {
        new Promise((resolve, reject) => {
            this.dataSource.query('SELECT * FROM hardware_schema.users')
                .then(response => {
                    resolve(response['rows']);
                }, rejection => {
                    reject("Unable to get users from database")
                })
        })
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            console.log("Error => " + error);
        })
    }

    public insertUser(req: Request, res: Response, params: InsertUserBody) {
        new Promise((resolve, reject) => {
            this.dataSource.query(insertUser, [params.first, params.last, params.email, params.picture])
                .then(response => {
                    resolve(response['rows']);
                }, rejection => {
                    reject("Unable to insert user into database")
                })
        })
        .then(data => {
            res.status(201).header('application/json').json(data);
        })
        .catch(error => {
            console.log("Error Creating User => " + error);
            res.status(400).send("Error Creating User => " + error);
        })
    }

    public getCategories(req: Request, res: Response) {
        new Promise((resolve, reject) => {
            const rows = this.dataSourceORM.getRepository(Category).find();
            resolve(rows);
        })
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            console.log("Error => " + error);
        })
    }

    public getInventory(req: Request, res: Response) {
        new Promise((resolve, reject) => {
            this.dataSource.query(getInventoryQuery)
                .then((response: any) => {
                    resolve(response['rows']);
                }, (rejection: any) => {
                    reject("Unable to get inventory from database")
                })
            })
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            console.log("Error => " + error);
        })
    }

    public getPurchases(req: Request, res: Response) {
        new Promise((resolve, reject) => {
            this.dataSource.query('SELECT * FROM hardware_schema.purchases')
                .then((response: any) => {
                    resolve(response['rows']);
                }, (rejection: any) => {
                    reject("Unable to get purchases from database")
                })
            })
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            console.log("Error => " + error);
        })
    }

    public getPurchasesByUser(req: Request, res: Response, userId: number) {
        new Promise((resolve, reject) => {
            this.dataSource.query(getPurchasesByUserQuery, [userId])
                .then((response: any) => {
                    resolve(response['rows']);
                }, (rejection: any) => {
                    reject("Unable to get purchases by user from database")
                })
            })
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            console.log("Error => " + error);
        })
    }

    public getSpecificPurchaseDetails(req: Request, res: Response, purchaseId: number) {
        new Promise((resolve, reject) => {
            this.dataSource.query(getSpecificPurchaseDetailsQuery, [purchaseId])
                .then((response: any) => {
                    resolve(response['rows']);
                }, (rejection: any) => {
                    reject("Unable to get specific purchase from database")
                })
            })
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            console.log("Error => " + error);
        })
    }
}