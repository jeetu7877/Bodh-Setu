import express from 'express';
import cors from 'cors';
import { config } from './src/config/index.js';
import healthRoutes from './src/routes/healthRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', healthRoutes);

// Root test route
app.get('/', (req, res) => {
  res.json({
    name: 'Bodh Setu API',
    tagline: 'Bridging Understanding, Unlocking Potential',
    status: 'online',
    healthCheck: '/api/health',
  });
});

app.listen(config.port, () => {
  console.log(`Bodh Setu Backend running on port ${config.port}`);
});
