import mongoose from "mongoose";

const TransactionSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
    trim: true,
  },

  amount: {
    type: Number,
    required: [true, "Amount is required"],
    min: [0.01, 'Amount must be strictly positive'],
  },

  type: {
    type: String,
    required: [true, "Type is required"],
    enum: {
      values: ['incom', 'expense'],
      message:'Type must be either incomme or expense'
    },
  },

  category: {
    type: String,
    trim: true,
  },

  date: {
    type: Date,
    required: [true, "Date is required"]
  }
},
  {
    timestamps: { createAt: true, updatedAt: false },
  }
)

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;