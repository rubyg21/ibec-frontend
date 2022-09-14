
const Productos1 = {
    API   : 'https://crudcrud.com/api/313fe5e029fd4767b0eb1050961e0153',
    model : '/personas',
    todos: function (cb){
        const url = this.API + this.model
        axios.get(url).then( response => {
            // Me devuelve una funcion que tiene un array
            cb(response.data)
        }).catch( err => {
            cb({
                error: `${err}`
            })
        })
    },
    crear: function (obj, cb){
        const url = this.API + this.model
        axios.post(url, obj).then( response => {
            cb(response.data)
        }).catch( err => {
            cb({
                error: `${err}`
            })
        })
    },
    eliminar: function (id, cb){
        const url = this.API + this.model + '/' + id
        axios.delete(url).then( response => {
            // Me devuelve una funcion que tiene un array
            cb(response.data)
        }).catch( err => {
            cb({
                error: `${err}`
            })
        })
    },
    editar: function (id, obj, cb){
        const url = this.API + this.model + '/' + id
        axios.put(url, obj).then( response => {
            cb(response.data)
        }).catch( err => {
            cb({
                error: `${err}`
            })
        })
    },
}

const crudpersona = Vue.component('crudpersona-component', {
    data: function (){
        return {
            persona: {},
            items: []
        }
    },
    methods: {
        restablecer: function (){
            this.persona = {}
        },
        // t=i
        guardarItem: function (){
            if(!this.persona._id){
                Productos1.crear(this.persona, response => {
                    if(!response.error){
                        this.cargaItems()
                    }
                })
            } else {
                // Si me llega la _id edito
                let id      = this.persona._id
                let persona = {...this.persona}
                delete persona._id

                Productos1.editar(id, persona, response => {
                    if(!response.error){
                        this.cargaItems()
                    }
                })
            }
            
        },
        cargaItems: function (){ 
            Productos1.todos( response => {
                if(!response.error){
                    this.items = response
                    this.persona = {}
                }
                console.log("response :: ", response)
            })
        },
        eliminarItem: function (_id){ 
            Productos1.eliminar(_id, response => {
                if(!response.error){
                    this.cargaItems()
                }
            })
        },
        editarItem: function (obj){
            // ... spred
            // copiar las propiedades y los valores del objeto
            // a un objeto nuevo quitando la referencia
            this.persona = {...obj}
        }
    },
    mounted: function (){
        console.log("app ready :: ")
        this.cargaItems()
    },
    template: `
        <div id="crudpersona-component">
        <input type="text" v-model="persona.nombre" placeholder="Nombre">
        <input type="text" v-model="persona.apellido" placeholder="Apellido">
        <input type="number" v-model="persona.edad">
        <button @click="guardarItem()">Agregar</button>
        <button @click="restablecer()">Restablecer</button>
        <hr>
        <ul>
            <li v-for="(itm, index) in items" :key="index">
                <span>#{{index}} {{itm.nombre}} {{itm.apellido}} {{itm.edad}}</span>
                <button @click="eliminarItem(itm._id)">Eliminar</button>
                <button @click="editarItem(itm)">Editar</button>
            </li>
        </ul>
        </div>
    `
})