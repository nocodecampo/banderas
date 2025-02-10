
// Utilizamos fetch para hacer la solicitud a la API
fetch('https://restcountries.com/v3.1/all')

// Convertimos la respuesta en JSON
.then(response => {
    $("#loader").hide();
     return response.json()
    })

.then(countries => {

    const banderas = document.getElementById('banderas');

    // Iteramos sobre cada país recibido
    countries.forEach(country => {

        // Verificamos que el objeto tenga la propiedad 'flags' y que incluya la URL en formato PNG
        if (country.flags && country.flags.png) {

          // Creamos un elemento <img> para la bandera
          const img = document.createElement('img');
          img.src = country.flags.png;
          img.alt = `Bandera de ${country.name.common}`;
          img.classList.add('flag');

          // Agregamos la imagen al contenedor
          banderas.appendChild(img);
        }
        
      });

      $(".flag").click(function (){
        alert("Bandera de "+ $(this).attr("alt"));
    })
    
    })
.catch(error => {
        console.error('Error al recuperar las banderas:', error);
      });
