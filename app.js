const express=require('express');
const fetch=require('node-fetch');
const path= require('path');
const corss=require('corss')
const db= require('./database');
require('dotenv').config();

const app= express();
const port = process.env.PORT||3000;

app.listen(port,()=>{
  console.log(`Starting server at ${port}`)
});


app.use(corss());
app.use(express.json());

//Static Files
app.use(express.static('public'));
app.use('/CSS',express.static(__dirname + 'public/CSS'));
app.use('/JS',express.static(__dirname + 'public/JS'));
app.use('/images',express.static(__dirname + 'public/images'));
app.use('/favicons',express.static(__dirname + 'public/favicons'));

var imageRouter=require('./routes/image-route');
app.use('/',imageRouter);


//Set views
app.set('views','./views');
app.set('view engine','ejs');


app.get('',(req,res)=>{
  //rendering a views
  res.render('upload-form')
});

app.get('/get-all-contact',(request,response)=>{
  db.query('SELECT * FROM images',(err,rows)=>{
    if(err)throw err;
    response.json({data:rows})
  })
});

app.get('/delete-db',(request,response)=>{
  db.query('DELETE FROM images',(err,rows)=>{
    if(err)throw err;
    response.json({data:rows})
  })
  db.query('ALTER TABLE images AUTO_INCREMENT=1',(err,rows)=>{
    if(err)throw err;
  })
});


app.get('/geoloc/:latlon', async (request,response)=>{
 let latlon=request.params.latlon.split(',');

 let lat=latlon[0];
 let long=latlon[1];

 const key_geo=process.env.KEY_GEO;

 let url=`http://www.mapquestapi.com/geocoding/v1/reverse?key=${key_geo}&location=${lat},${long}&includeRoadMetadata=false&includeNearestIntersection=true`
 let response_json= await fetch(url);
 let json= await response_json.json();

 response.json(json);
})
