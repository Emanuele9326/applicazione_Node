const multer = require('multer');
const imageMiddleware = require('../middlewares/image-moddleware');
const imageModel=require('../models/image-model'); 


module.exports={
  imageUploadForm:function(req,res){
    res.render('upload-form');
  },

  storeImage:function(req,res){
    let upload = multer({
      storage: imageMiddleware.image.storage(),
      fileFilter:imageMiddleware.image.fileFilter,
    }).single('image');

    upload(req,res, function(err){
      if(err instanceof multer.MulterError){
        res.send(err);
      }else if(err){
        res.send(err);
      }else{
       //store image in database
        let imageName = req.file.originalname;
        let ind= req.body.indirizzo;
        let lat=req.body.latitudine;
        let lon=req.body.longitudine;
        let inputValues = {
          image_name: imageName,
          indirizzo:ind,
          Lat:lat,
          Lon:lon
        }

        //call model
        imageModel.storeImage(inputValues,function(data){
          res.render('upload-form',{alertMsg:data})
        });

      }


    })
  }


}
