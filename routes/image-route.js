const express = require ('express');
const router = express.Router(); //questa funzione viene utilizzata per creare un nuovo ogetto router
const imageController = require('../controllers/image-controller');

const multer=require('multer');
// route/store-image con il metodo GET per visualizzare il modulo di caricamento dell'immagine
router.get('/store-image',imageController.imageUploadForm);
// route/store-image con il metodo POST per caricare e archiviare immagini.
router.post('/store-image',imageController.storeImage);

module.exports = router;
