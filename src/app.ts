import express from "express";
import { router } from "./api/routes/routes";
import { AppDataSource } from "./db/AppDataSource";
import { TypeORMDataSource } from "./db/TypeORMDataSource";

const app = express();

app.use(express.json());

AppDataSource.getInstance().initializeDataSource()
.then(msg => console.log(msg));

TypeORMDataSource.getInstance().initalizeDataSource()
.then(msg => console.log(msg));

app.use('/', router);

app.listen(3000, () => {
    console.log("Server started!");
})