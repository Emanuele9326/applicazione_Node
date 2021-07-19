function anteprimaFile(evt){
  let file=evt.target.files;
  console.log(file)            //oggetto
  let f=file[0];
  if(!f.type.match('image.*')){
    alert("Attention : the selected file must be an image, if you proceed you generate an error ! ");
    return false;
  };
  //oggetto FileReader consete alle applicazioni web di leggere in modo asincrono il contenuto dei file
  let reader = new FileReader() ;

  reader.onload = (function(theFile){   //IIFE funzione immediatamente invocata
    return function(e){
      let dataURL=e.target.result;
      document.getElementById('output').innerHTML=`<img class="thumb" title=${escape(theFile.name)}  src='${dataURL}'/>`;
    };

  })(f);

  reader.readAsDataURL(f);
}

document.addEventListener("DOMContentLoaded",function(){
  document.getElementById('myfile').value='';
  document.getElementById('output').value='';
  document.getElementById('myfile').addEventListener('change',anteprimaFile,false);

});
