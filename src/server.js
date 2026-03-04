import express from 'express'
import { errorHandler } from './middlewares/errorHandler.js';
import { notFound } from './middlewares/notFound.js';
import transactionRoutes from './routes/transaction.routes.js';


const app = express();

app.use(express.json());


app.get('/health', (req, res) => {
  res.status(200).json({ message:'welcome' })
})


app.use("/transactions", transactionRoutes)

app.use(errorHandler);

app.use(notFound);


export { app };
export default app;