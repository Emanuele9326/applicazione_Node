const db = require ('../database');


module.exports={
  storeImage:function(inputValues,callback){
   //check if "image_name" is present in the database
   let sql = 'SELECT * FROM images WHERE image_name = ?';

    db.query(sql,inputValues.image_name,function(err,data){

      let msg;

      if(err) throw err

      if(data.length>0){
        msg = inputValues.image_name + "is already exist";
      }else{
        //save users data into database
        let sql ='INSERT INTO images SET ?';
        db.query(sql,inputValues,function(err,data){    
          if(err) throw err
        });
       msg = inputValues.image_name+ "is uploaded successfully";
      }

      return callback(msg);
    })
  }

}
