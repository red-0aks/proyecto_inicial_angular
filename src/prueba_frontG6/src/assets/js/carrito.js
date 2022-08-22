let url =
fetch ('http://localhost:8088/api/juegos/')
      .then(response => response.json())
      .then(json => console.log(json))
      
      document.addEventListener('DOMContentLoaded', () => {
        // Variables
    const baseDeDatos = [
    {
      id: 5,
      nombre: "Pokémon Legends: Arceus",
      descripcion: "Leyendas Pokémon: Arceus es un videojuego de rol de acción desarrollado por Game Freak y publicado por The Pokémon Company y Nintendo para Nintendo Switch. Es parte de la octava generación de la serie de videojuegos Pokémon. Se trata de una precuela ",
      categoria: "Accion",
      fecha_estreno: "2022-02-28T03:00:00.000+00:00",
      precio: 41300,
      imagen: "https://cdn-products.eneba.com/resized-products/8ESBTbCuLLrlWDkMkJPBF8izyX6E6ZdmYKtqMWM7Khk_350x200_1x-0.jpeg"
  },
  {
      id: 6,
      nombre: "Crash Bandicoot",
      descripcion: "Crash Bandicoot es el nombre de una serie de videojuegos protagonizado por el personaje del mismo nombre. Fue creada en 1996 por Naughty Dog, quien desarrolló los primeros cuatro títulos, bajo la distribución de Universal Interactive Studios.",
      categoria: "Accion",
      fecha_estreno: "2021-05-23T04:00:00.000+00:00",
      precio: 8781,
      imagen: "https://cdn-products.eneba.com/resized-products/Nt7qVFOFVChCUPh5ZIyQ-w_9R8CgUj2coPu-nKgyrAo_350x200_1x-0.jpeg"
  },
  {
      id: 8,
      nombre: "God of War",
      descripcion: "God of War es un videojuego de acción y aventuras desarrollado por Santa Monica Studio y publicado por Sony Computer Entertainment (SCE). Lanzado por primera vez el 22 de marzo de 2005 para la consola PlayStation 2 (PS2), es la primera entrega de la ",
      categoria: "Accion",
      fecha_estreno: "2005-03-22T04:00:00.000+00:00",
      precio: 17247,
      imagen: "https://cdn-products.eneba.com/resized-products/XnW9CzzNc1NnqqPV2HbSm0ua4l83Kc69OdPzU6FLsys_350x200_1x-0.jpeg"
  },
  {
      id: 9,
      nombre: "Animal Crossing: New Horizons",
      descripcion: "Es un videojuego de simulación social desarrollado y publicado por Nintendo para Nintendo Switch, cuya fecha de lanzamiento mundial fue el 20 de marzo de 2020. Es la novena entrega de la saga Animal Crossing.",
      categoria: "Simulacion",
      fecha_estreno: "2020-03-20T03:00:00.000+00:00",
      precio: 39388,
      imagen: "https://cdn-products.eneba.com/resized-products/3gvqlUZ9EGrp0dmqdyRirjrxVWdAP-Vu5ES80ny_59s_350x200_1x-0.jpeg"
  },
  {
      id: 10,
      nombre: "The Last of Us Part II",
      descripcion: "The Last of Us Part II es un videojuego de terror y de acción y aventuras de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment para PlayStation 4\r\n",
      categoria: "Accion",
      fecha_estreno: "2020-06-19T04:00:00.000+00:00",
      precio: 8912,
      imagen: "https://cdn-products.eneba.com/resized-products/pV3VpSQ3LDaE2Prov55V68dVVJ4Z2ilu2IBJTFhiyxg_350x200_1x-0.jpeg"
  },
  {
      id: 11,
      nombre: "NBA 2K21 XBOX",
      descripcion: "NBA 2K21 es un videojuego de simulación de baloncesto de 2020 desarrollado por Visual Concepts y publicado por 2K Sports, basado en la Asociación Nacional de Baloncesto. Es la 22a entrega de la franquicia NBA 2K y la sucesora de NBA 2K20, y la predec",
      categoria: "Deportes",
      fecha_estreno: "2020-04-13T04:00:00.000+00:00",
      precio: 15168,
      imagen: "https://cdn-products.eneba.com/resized-products/Iai_g0aFP8CxvyRzoyVVf9gaCqQwBtBDV1mSVC9z_mc_350x200_1x-0.jpeg"
  },
  {
      id: 12,
      nombre: "Call of Duty: Modern Warfare 3",
      descripcion: "Call of Duty: Modern Warfare 3 es un videojuego de disparos en primera persona desarrollado por Infinity Ward y Sledgehammer Games, con el trabajo adicional de Raven Software, y distribuido por Activision",
      categoria: "FPS",
      fecha_estreno: "2011-11-08T03:00:00.000+00:00",
      precio: 11865,
      imagen: "https://cdn-products.eneba.com/resized-products/hEBD9J8_350x200_1x-0.jpg"
  },
  {
      id: 13,
      nombre: "Mario + Rabbids Kingdom Battle",
      descripcion: "Mario + Rabbids Kingdom Battle es un videojuego de rol táctico basado en turnos desarrollado y publicado por Ubisoft. Es un \"crossover\" de las franquicias de Raving Rabbids de Ubisoft y Mario de Nintendo. Salió a la venta en todo el mundo el 29 de ag",
      categoria: "Estrategia",
      fecha_estreno: "2017-08-29T03:00:00.000+00:00",
      precio: 12503,
      imagen: "https://cdn-products.eneba.com/resized-products/kf03C2AnuiD9gaFHyAEn2Vd7MC1Zp_tsqq_WDlciPPM_350x200_1x-0.jpg\r\nImagen"
  },
  {
      id: 14,
      nombre: "Grand Theft Auto: Vice City",
      descripcion: "Grand Theft Auto: Vice City, es un videojuego de acción-aventura de mundo abierto en tercera persona. Es el quinto título de la serie Grand Theft Auto y el segundo en gráficos 3D.",
      categoria: "Aventuras",
      fecha_estreno: "2002-10-29T03:00:00.000+00:00",
      precio: 8047,
      imagen: "https://cdn-products.eneba.com/resized-products/a5d6c023c377c60e5394b0cd5301a6d1_350x200_1x-0.jpg"
  },
  {
      id: 15,
      nombre: "Star Wars Jedi: Fallen Order",
      descripcion: "Star Wars Jedi: Fallen Order es un videojuego de acción y aventura para un solo jugador desarrollado por Respawn Entertainment y publicado por Electronic Arts, ambientado en el universo de Star Wars. La trama se sitúa entre el Episodio lll: La Vengan",
      categoria: "Accion",
      fecha_estreno: "2019-11-10T03:00:00.000+00:00",
      precio: 17895,
      imagen: "https://cdn-products.eneba.com/resized-products/VrHnf2r1IX2yFJkyfSD94fiKQ5ynw05QHA_kxak6Rck_350x200_1x-0.jpeg"
  },
  {
      id: 16,
      nombre: "Nickelodeon All-Star Brawl",
      descripcion: "Nickelodeon All-Star Brawl es un videojuego perteneciente al género de lucha desarrollado por Ludosity y Fair Play Labs, y publicado por GameMill Entertainment en Norteamérica y Maximum Games en Europa",
      categoria: "Lucha",
      fecha_estreno: "2021-01-12T03:00:00.000+00:00",
      precio: 2490,
      imagen: "https://cdn-products.eneba.com/resized-products/pjXspNnixCTUAnN9JOrM4JtG2mxQTXcXOo8eiaQrsjA_350x200_1x-0.jpeg"
  },
  {
      id: 17,
      nombre: "Mortal Kombat 11 Ultimate",
      descripcion: "Mortal Kombat 11 es un videojuego de lucha desarrollado por NetherRealm Studios y publicado por Warner Bros. Interactive Entertainment. Se ejecuta en una versión muy modificada de Unreal Engine 3, ​ es la undécima entrega principal de la serie Mortal",
      categoria: "Lucha",
      fecha_estreno: "2019-04-22T04:00:00.000+00:00",
      precio: 25000,
      imagen: "https://cdn-products.eneba.com/resized-products/lWww24aHAc4baWySSkvzla7Cz_5dIwrE7Hnp33QWtS4_350x200_1x-0.jpeg"
  },
  {
      id: 18,
      nombre: "Euro Truck Simulator 2",
      descripcion: "Es un videojuego de simulación de camiones desarrollado y publicado por SCS Software el 19 de octubre de 2012 para Microsoft Windows, Mac OS y Linux. Es una secuela directa del videojuego de 2008 Euro Truck Simulator y es el segundo de la serie Euro ",
      categoria: "Simulacion",
      fecha_estreno: "2012-09-19T03:00:00.000+00:00",
      precio: 3845,
      imagen: "https://cdn-products.eneba.com/resized-products/V8fK6Td_350x200_1x-0.jpg"
  },
  {
      id: 19,
      nombre: "Need for Speed: Heat ",
      descripcion: "Need for Speed Heat es un videojuego de carreras desarrollado por Ghost Games y publicado por Electronic Arts para Microsoft Windows, PlayStation 4 y Xbox One. Es la vigésimo cuarta entrega de la saga Need for Speed y conmemora el 25 aniversario de l",
      categoria: "Carreras",
      fecha_estreno: "2019-09-17T03:00:00.000+00:00",
      precio: 16112,
     imagen: "https://cdn-products.eneba.com/resized-products/WlFVWoJxpl3IaUUNJN98kjGy4qpBTzkffjg4i0n87y4_350x200_1x-0.jpeg\r\nImagen"
  },
  {
      id: 20,
      nombre: "The Sims 4",
      descripcion: "Los Sims 4 es un videojuego de simulación social y de vida, el cuarto de la serie de juegos de Los Sims, desarrollado por Maxis y publicado por Electronic Arts para Windows y macOS\r\n",
      categoria: "Simulacion",
      fecha_estreno: "2014-07-02T04:00:00.000+00:00",
      precio: 10739,
      imagen: "https://cdn-products.eneba.com/resized-products/ipprn0qv5n0bztlzp8em_350x200_1x-0.jpg"
  },
  {
      id: 21,
      nombre: "Batman: Arkham",
      descripcion: "Batman: Arkham es una serie de videojuegos y una película de acción protagonizados por el superhéroe ficticio Batman",
      categoria: "Accion",
      fecha_estreno: "2013-09-14T03:00:00.000+00:00",
      precio: 14500,
      imagen: "https://cdn-products.eneba.com/resized-products/xls0pnx4wcnwqaypsenm_350x200_1x-0.jpg"
  },
  {
      id: 25,
      nombre: "Dragon Ball: Xenoverse 2",
      descripcion: "Es un videojuego desarrollado por Dimps y publicado por Bandai Namco Entertainment, basado en la franquicia de Dragon Ball.​​​ Es la secuela de Dragon Ball Xenoverse, y se publicó en otoño de 2016 para PlayStation 4, Xbox One, Microsoft Windows y Nin",
      categoria: "Accion",
      fecha_estreno: "2016-09-27T03:00:00.000+00:00",
      precio: 5330,
      imagen: "https://cdn-products.eneba.com/resized-products/wvJdwlr_350x200_1x-0.jpg"
  }
  ];
        

        let carrito = [];
        const divisa = '$';
        const DOMitems = document.querySelector('#items');
        const DOMcarrito = document.querySelector('#carrito');
        const DOMtotal = document.querySelector('#total');
        const DOMbotonVaciar = document.querySelector('#boton-vaciar');

        // Funciones

        /**
        * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
        */
        function renderizarProductos() {
            baseDeDatos.forEach((info) => {
                // Estructura
                const miNodo = document.createElement('div');
                miNodo.classList.add('card', 'col-sm-3','justify-content-center','m-1','bordes-transparentes-datos');
                // Body
                const miNodoCardBody = document.createElement('div');
                miNodoCardBody.classList.add('card-body');
                // Titulo
                const miNodoTitle = document.createElement('h5');
                miNodoTitle.classList.add('card-title');
                miNodoTitle.textContent = info.nombre;
                // Imagen
                const miNodoImagen = document.createElement('img');
                miNodoImagen.classList.add('img-juegos');
                miNodoImagen.setAttribute('src', info.imagen);
                // Precio
                const miNodoPrecio = document.createElement('p');
                miNodoPrecio.classList.add('card-text');
                miNodoPrecio.textContent = `${divisa}${info.precio}`;
                // Boton 
                const miNodoBoton = document.createElement('button');
                miNodoBoton.classList.add('btn', 'btn-primary');
                miNodoBoton.textContent = 'Agregar al Carrito';
                miNodoBoton.setAttribute('marcador', info.id);
                miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
                // Insertamos
                miNodo.appendChild(miNodoImagen);
                miNodoCardBody.appendChild(miNodoTitle);
                miNodoCardBody.appendChild(miNodoPrecio);
                miNodoCardBody.appendChild(miNodoBoton);
                miNodo.appendChild(miNodoCardBody);
                DOMitems.appendChild(miNodo);
            });
        }

        /**
        * Evento para añadir un producto al carrito de la compra
        */
        function anyadirProductoAlCarrito(evento) {
            // Anyadimos el Nodo a nuestro carrito
            carrito.push(evento.target.getAttribute('marcador'))
            // Actualizamos el carrito 
            renderizarCarrito();

        }

        /**
        * Dibuja todos los productos guardados en el carrito
        */
        function renderizarCarrito() {
            // Vaciamos todo el html
            DOMcarrito.textContent = '';
            // Quitamos los duplicados
            const carritoSinDuplicados = [...new Set(carrito)];
            // Generamos los Nodos a partir de carrito
            carritoSinDuplicados.forEach((item) => {
                // Obtenemos el item que necesitamos de la variable base de datos
                const miItem = baseDeDatos.filter((itemBaseDatos) => {
                    // ¿Coincide las id? Solo puede existir un caso
                    return itemBaseDatos.id === parseInt(item);
                });
                // Cuenta el número de veces que se repite el producto
                const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                    // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                    return itemId === item ? total += 1 : total;
                }, 0);
                // Creamos el nodo del item del carrito
                const miNodo = document.createElement('div');
                miNodo.classList.add('list-group-item', 'text-center', 'text-center');
                miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${divisa}${miItem[0].precio}  `;
                // Boton de borrar
                const miBoton = document.createElement('button');
                miBoton.classList.add('btn', 'btn-danger');
                miBoton.textContent = 'X';
                miBoton.dataset.item = item;
                miBoton.addEventListener('click', borrarItemCarrito);
                // Mezclamos nodos
                miNodo.appendChild(miBoton);
                DOMcarrito.appendChild(miNodo);
            });
           // Renderizamos el precio total en el HTML
           DOMtotal.textContent = calcularTotal();
        }

        /**
        * Evento para borrar un elemento del carrito
        */
        function borrarItemCarrito(evento) {
            // Obtenemos el producto ID que hay en el boton pulsado
            const id = evento.target.dataset.item;
            // Borramos todos los productos
            carrito = carrito.filter((carritoId) => {
                return carritoId !== id;
            });
            // volvemos a renderizar
            renderizarCarrito();
        }

        /**
         * Calcula el precio total teniendo en cuenta los productos repetidos
         */
        function calcularTotal() {
            // Recorremos el array del carrito 
            return carrito.reduce((total, item) => {
                // De cada elemento obtenemos su precio
                const miItem = baseDeDatos.filter((itemBaseDatos) => {
                    return itemBaseDatos.id === parseInt(item);
                });
                // Los sumamos al total
                return total + miItem[0].precio;
            }, 0);
        }

        /**
        * Varia el carrito y vuelve a dibujarlo
        */
        function vaciarCarrito() {
            // Limpiamos los productos guardados
            carrito = [];
            // Renderizamos los cambios
            renderizarCarrito();
        }

        // Eventos
        DOMbotonVaciar.addEventListener('click', vaciarCarrito);

        // Inicio
        renderizarProductos();
        renderizarCarrito();
      });