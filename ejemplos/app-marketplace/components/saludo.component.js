const saludo = Vue.component('saludo-component', {
    data: function() {
      return  {saludo: null,
              nombre: null
    }},
    methods: {
        obtengoSaludo: function (){
            const hola = "Hola, "
            this.saludo = hola + this.nombre
            // En seguida del saludo
            this.nombre = null
        },
        restablecer: function (){
            this.saludo = null
        }
    },
    template: `
    <div id="saludo-component">
        <input type="text" v-model="nombre">
        <button @click="obtengoSaludo()">Saludar</button>
        <button @click="restablecer()">Restablecer</button>
        <p>{{saludo}}</p>
    </div>
    `
})