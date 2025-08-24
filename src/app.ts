import express from "express";
import pg from 'pg';
import { AppDataSource } from "./db/AppDataSource";

const app = express();

AppDataSource.getInstance().initializeDataSource()
.then(msg => console.log(msg));

app.get('/', (req, res) => {
    const dataSource = AppDataSource.getInstance().getDataSource();
    const promise = new Promise((resolve, reject) => {
        dataSource.query('SELECT * FROM hardware_schema.vendors')
        .then(response => {
            resolve(response)
        })
    })
    promise.then(data => {
        res.send(data)
    })
})

app.listen(3000, () => {
    console.log("Server started!");
})