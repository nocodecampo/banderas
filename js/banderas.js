// 1. Crear el objeto XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Configurar la solicitud: método, URL y si es asíncrona
xhr.open("GET", "https://restcountries.com/v3.1/all", );

// 3. Definir la función de callback para manejar los cambios en el estado de la solicitud
xhr.onload=function(){
    if(xhr.status==200){
        var data=JSON.parse(xhr.responseText);
        var banderas=document.getElementById("banderas");
        for(var i=0;i<data.length;i++){
            var img=document.createElement("img");
            img.src=data[i].flags.png;
            img.alt=data[i].name.common;
            banderas.appendChild(img);
        }
    }
}
xhr.send();