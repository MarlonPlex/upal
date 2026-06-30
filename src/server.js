import dotenv from 'dotenv';
import express from 'express';
import path from 'node:path';
import { Pool } from 'pg';
import { fileURLToPath } from 'node:url';


/* CONSTANTS AND SETUP */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env")});
const app = express();
const port = 3000;

const pool = new Pool({
    user: process.env.NODE_USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
});

await pool.connect();

const result = await pool.query('SELECT * FROM coordinates;');
console.log(result);

/* SERVER API */
app.use(express.static(path.join(__dirname, 'public')));

app.get('/example/route', (req, res) => {
    const data = {name: 'Marlon'};
    console.log("Route fired");
    res.send(data)
    console.log(data.name);
});

app.listen(port, () => {
  console.log(`Server Listening on port ${port}...`)
});


