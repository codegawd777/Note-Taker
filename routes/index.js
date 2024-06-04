const router = require('express').Router();

// Import our modular routers for /api and /notes
const apiRouter = require('./api');
const notesRouter = require('./notes');


router.use('/api', apiRouter);
router.use('/notes', notesRouter);


module.exports = router;