
const app = new Vue({
  el: '#app',
  data: {
     diaNacimiento: null,
     mesNacimiento: null,
     anioNacimiento: null,
     mensaje: null
  },
  methods: {
     calculaEdad: function (){
        // diaNacimiento, mesNacimiento, anioNacimiento
              // this.diaNacimiento=diaNacimiento;
              // this.mesNacimiento=mesNacimiento;
              // this.anioNacimiento=anioNacimiento;
          
              this.edad=function edad(dia,mes,hoy,objeto)
              // dia,mes,hoy,objeto
              {
                 var calcula=0;
                 var objeto=new Date();
                 var dia=objeto.getDate();
                 var mes= objeto.getMonth()+1;
                 var hoy=objeto.getFullYear();
      
                      if(mes<this.mesNacimiento||(mes==this.mesNacimiento&&dia<this.dia))
                      {
                        return calcula=parseInt(hoy-this.anioNacimiento)-1; 
                      }
                      else
                      {
                         return calcula=parseInt(hoy-this.anioNacimiento);  
                      }
                } 

                
      
      if(this.edad() >= 18){
       this.mensaje = "Eres mayor de edad"
      } else{
        this.mensaje = "Eres menor de edad"
      }
      this.diaNacimiento = null
      this.mesNacimiento = null
      this.anioNacimiento = null
      
         // salida.innerHTML= "La edad actual de "+" es  "+this.edad()+".";
      },
      restablecer: function (){
        this.diaNacimiento = null,
        this.mesNacimiento = null,
        this.anioNacimiento = null,
        this.mensaje = null
      }
      
      },

      
})









// function calculaEdad(diaNacimiento, mesNacimiento, anioNacimiento) 
// {
 
//   var diaNacimiento=document.getElementById("dia").value;
//   var mesNacimiento=document.getElementById("mes").value;
//   var anioNacimiento =document.getElementById("anio").value;
//   var salida=document.getElementById("salida");
 
       
//         this.diaNacimiento=diaNacimiento;
//         this.mesNacimiento=mesNacimiento;
//         this.anioNacimiento=anioNacimiento;
   
//         this.edad=function edad()
//         {
//            var calcula=0;
//            var objeto=new Date();
//            var dia=objeto.getDate();
//            var mes= objeto.getMonth()+1;
//            var hoy=objeto.getFullYear();

//                 if(mes<this.mesNacimiento||(mes==this.mesNacimiento&&dia<this.dia))
//                 {
//                   return calcula=parseInt(hoy-this.anioNacimiento)-1; 
//                 }
//                 else
//                 {
//                    return calcula=parseInt(hoy-this.anioNacimiento);  
//                 }
//           };

// if(this.edad() >= 18){
//  salida.innerHTML= "Eres mayor de edad";
// } else{
// salida.innerHTML= "Eres menor de edad";
// }
  // salida.innerHTML= "La edad actual de "+" es  "+this.edad()+".";
// }
