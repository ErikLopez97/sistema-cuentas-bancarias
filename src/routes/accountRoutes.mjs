import express from 'express';
import { createAccount, getAccount, updateAccount, deleteAccount } from '../controllers/accountController.mjs';
import auth from '../middlewares/authMiddleware.mjs';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Account:
 *       type: object
 *       required:
 *         - accountNumber
 *         - owner
 *         - balance
 *       properties:
 *         accountNumber:
 *           type: string
 *           description: The account number
 *         owner:
 *           type: string
 *           description: The owner of the account
 *         balance:
 *           type: number
 *           description: The balance of the account
 *       example:
 *         accountNumber: '123456'
 *         owner: 'John Doe'
 *         balance: 100
 */

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: The accounts managing API
 */

/**
 * @swagger
 * /accounts:
 *   post:
 *     summary: Create a new account
 *     tags: [Accounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Account'
 *     responses:
 *       201:
 *         description: The account was successfully created
 *       500:
 *         description: Some server error
 */
router.post('/accounts', auth, createAccount);

/**
 * @swagger
 * /accounts/{id}:
 *   get:
 *     summary: Get the account by id
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The account id
 *     responses:
 *       200:
 *         description: The account description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Account'
 *       404:
 *         description: The account was not found
 */
router.get('/accounts/:id', auth, getAccount);

/**
 * @swagger
 * /accounts/{id}:
 *   put:
 *     summary: Update the account by the id
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The account id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Account'
 *     responses:
 *       200:
 *         description: The account was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Account'
 *       404:
 *         description: The account was not found
 *       500:
 *         description: Some error happened
 */
router.put('/accounts/:id', auth, updateAccount);

/**
 * @swagger
 * /accounts/{id}:
 *   delete:
 *     summary: Remove the account by id
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The account id
 *     responses:
 *       200:
 *         description: The account was deleted
 *       404:
 *         description: The account was not found
 */
router.delete('/accounts/:id', auth, deleteAccount);

export default router;