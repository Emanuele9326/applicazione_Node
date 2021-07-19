const button=document.getElementById('lista');
button.addEventListener('click', async function(){

  let lista= await fetch('http://localhost:3000/get-all-contact')
  let data= await lista.json()
  console.log(data.data);


  loadHTMLTable(data.data);

  function loadHTMLTable(data){
    const table = document.querySelector('table tbody');
    if(data.length===0){
      table.innerHTML="<tr><td class='no-data' colspan='5'>No data</td></tr>"
      return
    }

    let tableHtml="";
    data.forEach(function({id,image_name,indirizzo,Lat,Lon}){
      tableHtml+="<tr>";
      tableHtml+=`<td>${id}</td>`;
      tableHtml+=`<td>${image_name}</td>`;
      tableHtml+=`<td>${indirizzo}`;
      tableHtml+=`<td>${Lat}</td>`;
      tableHtml+=`<td>${Lon}</td>`;
    });
    table.innerHTML=tableHtml;

  }
 }
);

//Button Delete;

const d_button=document.getElementById('delete');
d_button.addEventListener('click', async function(){

  let lista= await fetch('http://localhost:3000/delete-db')
  let data= await lista.json()
  let array= data.data;
  
  if(array.length==undefined){
    alert('List deleted');
  }
})
