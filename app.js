      
const app = new Vue({
   el: '#app',
   data: {
      fechaNacimiento: null,
      edad: null,
      mensaje: null
   },
   methods: {
           
            calcularEdad :  function (fechaNacimiento) {
             const fechaActual = new Date();
             const anoActual = parseInt(fechaActual.getFullYear());
             const mesActual = parseInt(fechaActual.getMonth()) + 1;
             const diaActual = parseInt(fechaActual.getDate());
         
             // 2016-07-11
             const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
             const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
             const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));
         
             this.edad = anoActual - anoNacimiento;
             if (mesActual < mesNacimiento) {
                this.edad--;
             } else if (mesActual === mesNacimiento) {
                 if (diaActual < diaNacimiento) {
                    this.edad--;
                 }
             }
             return 'hola'     //this.edad
        
   
            
       },
       restablecer: function (){
         this.fechaNacimiento = null,
         this.mensaje = null,
         this.edad = null
       } 
       
       },

       
})
