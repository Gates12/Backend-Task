import express, { Request, Response } from 'express';
import { fibonacci } from './fibonacci'; 
import { getBalancedSubstrings } from './balancedSubstring'; 
import { migrateRings } from './migrateRings'; 

const app = express();
const PORT = 5000;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Backend Task API!');
});
  
// Fibonacci route
app.get('/fibonacci/:n', (req: Request<{ n: string }>, res: Response) => {
    const n = parseInt(req.params.n, 10);
    if (isNaN(n) || n < 0) {
        return res.status(400).json({ error: 'Invalid input. n must be a non-negative integer.' });
    }
    const result = fibonacci(n);
    res.json({ result });
});


app.get('/balancedSubstring/:S', (req: Request<{ S: string }>, res: Response) => {
    const S = req.params.S;
    if (typeof S !== 'string') {
        return res.status(400).json({ error: 'Invalid input. S must be a string.' });
    }
    const result = getBalancedSubstrings(S);
    res.json({ result });
});


app.get('/migrateRings/:N', (req: Request<{ N: string }>, res: Response) => {
    const N = parseInt(req.params.N, 10);
    if (isNaN(N) || N <= 0) {
        return res.status(400).json({ error: 'Invalid input. N must be a positive integer.' });
    }
    const result = migrateRings(N, 'A', 'B', 'C');
    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
