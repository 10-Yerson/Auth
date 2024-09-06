const express = require('express');
const authRoutes = require('./auth');
const userRoutes = require('./user');
const adminRoutes = require('./admin');
const publicationRoutes = require('./publication')
const fotoRoutes = require('./uploadRoutes')

const router = express.Router();

// Agrupa y organiza las rutas
router.use('/api/auth', authRoutes);
router.use('/api/user', userRoutes);
router.use('/api/admin', adminRoutes);
router.use('/api/publication', publicationRoutes);
router.use('/api/', fotoRoutes );
module.exports = router;
