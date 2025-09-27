import express, {Request, Response} from 'express';
import { Controller } from "../controllers/Controller";
import { InsertUserBody } from "../../models/http/InsertUserBody";
const router = express.Router();

router.get('/vendors', (req: Request, res: Response) => {
    const controller = new Controller();
    controller.getVendors(req, res);
});

router.get('/users', (req: Request, res: Response) => {
    const controller = new Controller();
    controller.getUsers(req, res);
});

router.post('/users', (req: Request, res: Response) => {
    const controller = new Controller();
    const body: InsertUserBody = req.body;
    controller.insertUser(req, res, body)
})

router.get('/categories', (req: Request, res: Response) => {
    const controller = new Controller();
    controller.getCategories(req, res);
});

router.get('/inventory', (req: Request, res: Response) => {
    const controller = new Controller();
    const vendor: any = req.query.vendor;
    const category: any = req.query.category;
    const rating: any = req.query.rating;
    const name: any = req.query.name;
    controller.getInventory(req, res);
});

router.get('/purchases', (req: Request, res: Response) => {
    const controller = new Controller();
    controller.getPurchases(req, res);
});

router.get('/users/:id/purchases', (req: Request, res: Response) => {
    const userId: number = Number(req.params.id);
    const controller = new Controller();
    controller.getPurchasesByUser(req, res, userId);
});

router.get('/purchases/:id', (req: Request, res: Response) => {
    const purchaseId: number = Number(req.params.id);
    const controller = new Controller();
    controller.getSpecificPurchaseDetails(req, res, purchaseId);
});

export { router };