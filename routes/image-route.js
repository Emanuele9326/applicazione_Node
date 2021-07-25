const express = require ('express');
const router = express.Router(); //This function is used to create a new Router object
const imageController = require('../controllers/image-controller');

const multer=require('multer');
// GET method displays the image upload form
router.get('/store-image',imageController.imageUploadForm);
// POST method to upload and archive images
router.post('/store-image',imageController.storeImage);

module.exports = router;
