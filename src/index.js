import { app } from './server.js'
import { ENV } from '../env.js';
import { connectDB } from './config/db.js';

// connect to DATABASE
await connectDB();

app.listen(ENV.PORT, () => {
  console.log('Server is running on port', ENV.PORT);
})