const multer = require('multer');
const path = require('path');


module.exports.image={
  storage: function(){
    let storage = multer.diskStorage({
      destination: function(req , file , cb){
        cb(null,'public/images/')
      },
      filename:function(req,file,cb){
        cb(null,file.originalname);
      }
    })
    return storage;
  },

  fileFilter:function(req, file ,cb){
    //Accept images only
    if(!file.originalname.match(/\.(jpg|jpeg|JPEG|png|PNG|gif|GIF)$/)){
      req.fileValidationError='Only image files are allowed!';
      return cb(new Error('Only image files are allowed!'),false);
    }
    cb(null,true);
  }

}
