import express from 'express';
import type { Request, Response } from 'express';
import { getCasa } from '../controllers/casa.controller.js';

const router = express.Router();

// @ts-expect-error: Express types conflict workaround
router.get('/', getCasa);

export default router;