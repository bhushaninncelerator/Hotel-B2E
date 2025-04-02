const fastify = require('fastify')({ logger: true });
const helmet = require('helmet');
const cors = require('@fastify/cors'); // Import the CORS plugin
const connectDB = require('./config/db');
const jwtUtils = require('./utils/jwtUtils');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config(); // Add this line at the top of your entry file
const adminRoutes = require('./routes/adminRoutes'); 
const customerRoutes = require('./routes/customerRoutes');
// Connect to MongoDB
connectDB();

// Register plugins
fastify.register(helmet);

// Configure CORS
fastify.register(cors, {
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allowed HTTP methods
  credentials: true, // Allow cookies and credentials
});

fastify.register(jwtUtils);
fastify.register(authRoutes);
fastify.register(adminRoutes);
fastify.register(customerRoutes); 
module.exports = fastify;


