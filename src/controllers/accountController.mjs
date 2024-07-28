import Account from '../models/Account.mjs';

export const createAccount = async(req, res) => {
    const { accountNumber, owner, balance } = req.body;
    try {
        const account = new Account({ accountNumber, owner, balance });
        await account.save();
        res.status(201).json(account);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAccount = async(req, res) => {
    try {
        const account = await Account.findById(req.params.id);
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.json(account);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateAccount = async(req, res) => {
    const { balance } = req.body;
    try {
        const account = await Account.findById(req.params.id);
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }
        account.balance = balance;
        await account.save();
        res.json(account);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteAccount = async(req, res) => {
    try {
        const account = await Account.findById(req.params.id);
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }
        await account.remove();
        res.json({ message: 'Account removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};