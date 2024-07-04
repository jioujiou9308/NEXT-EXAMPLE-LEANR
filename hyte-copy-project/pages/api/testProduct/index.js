import dbConnect from '../../../util/mongo'
import TestProduct from '../../../models/TestProduct'

export default async function handler(req, res) {
    const { method } = req
    dbConnect();
    if (method === 'POST') {
        console.log('req.body  ', req.body);
        try {
            const result = await TestProduct.create(req.body)
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
} 