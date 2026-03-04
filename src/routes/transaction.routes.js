import express from 'express';
import { creatTransaction } from '../controllers/transactions/create.controller.js';


const router = express.Router();


// create transaction

router.post('/', creatTransaction);

// GET Transactions


// GET transaction/stats


export default router;