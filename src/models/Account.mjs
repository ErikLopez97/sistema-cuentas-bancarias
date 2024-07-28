import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        required: true,
        unique: true,
    },
    owner: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
        default: 0,
    },
    transactions: [{
        type: {
            type: String,
            enum: ['deposit', 'withdrawal'],
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }, ],
});

export default mongoose.model('Account', AccountSchema);