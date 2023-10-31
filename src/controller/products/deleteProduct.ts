import express, { Request, Response } from 'express';
import { Products } from '../../database/models/products.model';


const deleteProduct = async (
    req: Request,
    res: Response,
    next: express.NextFunction
) => {
    try {
        const products = new Products();
        await products.deleteProduct(req.params.id);
        return res.status(200).json({ message: 'Deleted product' });
    } catch (err) {
        res.status(400).json(err);
        return;
    }
};

export default deleteProduct;
