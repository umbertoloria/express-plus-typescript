import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const port = process.env.SERVER_PORT;

const app = express();
app.listen(port);

export default app;
