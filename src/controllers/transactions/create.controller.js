import { createTransactionService } from "../../services/transaction.service.js"

export const creatTransaction = async (req, res) => {
  try {
    const transaction = await createTransactionService(req.body);
    res.status(200).json({ 
      success: true,
      data: transaction
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}