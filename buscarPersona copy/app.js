const usuarios = [
  {
    edad: 30,
    nombre: "Alex",
    apellido: "Casadevall",
  },
  {
    edad: 30,
    nombre: "Rubens",
    apellido: "Galarraga",
  },
  ,
  {
    edad: 30,
    nombre: "Ale-Banana",
    apellido: "Cantonnet",
  }
];


const app = new Vue({
  el: '#app',
  data: {
        // edad: 30,
        // nombre: "Alex",
        apellido: null,
        mensaje: null
    },
  methods: {
    bucarUsuario1: function (){

      const bucarUsuario = {
        obtenerPorApellido: function (apellido) {
          let findNombre = undefined;
          let findEdad = undefined;
          usuarios.map((usuario) => {
            if (usuario.apellido === apellido) {
              findNombre = usuario.nombre
              findEdad = usuario.edad
            }
          });
          return ( findNombre, findEdad )
            ?  `su edad es: ${findEdad} años, su nombre es : ${findNombre}`
            :  `Error: No existe usuario con el apellido: ${apellido} ` ;
        },
      };
        
         this.mensaje = bucarUsuario.obtenerPorApellido(this.apellido) 
         this.apellido = null
      
        // console.log( bucarUsuario.obtenerPorApellido(this.apellido));
       

  },
  restablecer: function() {
    this.mensaje = null;
    this.apellido = null

  }

}})

// *******************************************************


// const usuarios = [
//   {
//     edad: 30,
//     nombre: "Alex",
//     apellido: "Casadevall",
//   },
// ];




// const bucarUsuario = {
//   obtenerPorApellido: function (apellido) {
//     let findNombre = undefined;
//     let findEdad = undefined;
//     usuarios.map((usuario) => {
//       if (usuario.apellido === apellido) {
//         findNombre = usuario.nombre
//         findEdad = usuario.edad
//       }
//     });
//     return ( findNombre, findEdad )
//       ?  `su edad es: ${findEdad} años, su nombre es :${findNombre}`
//       : { error: "No existe usuario con el apellido: " + apellido };
//   },
// };

// console.log( bucarUsuario.obtenerPorApellido("Casadevall"));
// console.log(mensaje)
