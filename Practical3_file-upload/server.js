const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
require('dotenv').config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(morgan('dev'));

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log('Created uploads directory:', uploadDir);
}

// Serve uploaded files statically
app.use('/uploads', express.static(uploadDir));

// Configure Multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const timestamp = Date.now();
        // Sanitize filename to prevent path traversal
        const safeName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
        cb(null, `${timestamp}-${safeName}`);
    }
});

// Configure file filter
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG and PDF files are allowed.'), false);
    }
};

// Create multer instance
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: fileFilter
});

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'File Upload Server is running' });
});

// File upload route
app.post('/api/upload', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        
        console.log('File received:', {
            name: req.file.originalname,
            type: req.file.mimetype,
            size: req.file.size
        });
        
        return res.status(200).json({
            message: 'File uploaded successfully',
            filename: req.file.filename,
            originalName: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size,
            url: `/uploads/${req.file.filename}`
        });
        
    } catch (error) {
        console.error('Upload error:', error);
        return res.status(500).json({ error: error.message });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(413).json({ error: 'File too large. Maximum size is 5MB.' });
        }
        return res.status(400).json({ error: err.message });
    }
    
    if (err.message && err.message.includes('Invalid file type')) {
        return res.status(400).json({ error: err.message });
    }
    
    res.status(500).json({ error: 'Server error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`📁 Upload directory: ${uploadDir}`);
    console.log(`🌐 CORS enabled for: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});