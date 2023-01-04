const express = require('express');
const { generateImage, textTranslate } = require('../controllers/openaigenerateController');
const router = express.Router();

router.post('/generateimage', generateImage);
router.post('/texttranslate', textTranslate);

module.exports = router;