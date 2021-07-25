//code geolocation --- button "Geolocalizza"
let geoloco=document.getElementById("geoloc");

geoloco.addEventListener("click",async function(){
 //verify if geolocation is supported
 if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(showPosition);
  }else{
    alert("Geolocation is not supported by this browser");
  }


 async function showPosition(position){

   let lat=position.coords.latitude;
   console.log(lat);
   let long= position.coords.longitude;
   console.log(long);

   let url= `http://localhost:3000/geoloc/${lat},${long}`;
   let response_json= await fetch(url);
   let json= await response_json.json();
   console.log(json);

   let state = json.results[0].locations[0].adminArea1;
   console.log(state);
   let regione=json.results[0].locations[0].adminArea3;
   console.log(regione);
   let city = json.results[0].locations[0].adminArea5;
   console.log(city);
   let adress= json.results[0].locations[0].street;

   let str=`${regione}(${state}), ${city}, ${adress}`

   console.log(str);

   document.getElementById('ind').value= str;
   document.getElementById('Lat').value=lat;
   document.getElementById('Long').value=long;
  };
})
