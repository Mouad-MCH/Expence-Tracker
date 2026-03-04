import Transaction from "../models/Transaction.js";

export const createTransactionService = async (data) => {
  const transaction = await Transaction.create(data);
  return transaction;
}

export const getBalance = async () => {
  const re = await Transaction.aggregate([
    {
      
    }
  ])
}