
// const API   = 'https://crudcrud.com/api/82ed6ce6af4d43dbbffc8bea891b4a94'
// const model = '/compras'
// const RAND_SIZE = 1000000000


// API       : 'https://crudcrud.com/api/0277211ced8e4a5baf6ba0d42b7583fe',
// model      : '/compras',
// RAND_SIZE  : 1000000000,


const Compras = {
    API       : 'https://crudcrud.com/api/7e636766dbf9407fb482bfe43fdbc231',
    model      : '/compras',
    RAND_SIZE  : 1000000000,

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
    

const ComprasComponente = Vue.component('compras-component',{
   
    data: function() {
        return{
            
            compras: [],
            form: {
                _id: null, 
                producto: null,
                usuario: null,
                cantidad: 0,
                precio: 0,
               
            },
            total: 0
        }
    },
        methods: {
            initForm: function (){
                    this.form = {
                    _id: null, 
                    producto: null,
                    usuario: null,
                    cantidad: 0,
                    precio: 0
                }
            },
            obtenerTodos: function (){
                Compras.todos( res => {
                    this.compras = res
                    this.initForm()
                    this.totalizar()
                })
            },
            guardar: function (){
                // Crear compra
                if(this.form._id === null){
                    const form = {...this.form}
                    delete form._id
                    Compras.crear(form, res => {
                        console.log(res)
                        this.obtenerTodos()
                    })
                } else {
                    const form = {...this.form}
                    delete form._id
                    Compras.editar(this.form._id, form, res => {
                        console.log(res)
                        this.obtenerTodos()
                    })
                }
            },
            eliminar: function (id){
                Compras.eliminar(id, res => {
                    console.log(res)
                    this.obtenerTodos()
                })
            },
            editar: function (compra){
                this.form = {...compra}
            },
            totalizar: function (){
                let total = 0
                this.compras.map( compra => {
                    total += parseInt(compra.cantidad) * parseFloat(compra.precio)
                })
                this.total = total
            }
        },
        mounted: function (){
            this.obtenerTodos()
        },


template: `
<div id="compras-component">
<div id="compras--listado">
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(compra, i) in compras" :key="i">
            <td>{{compra._id}}</td>
            <td>{{compra.producto}}</td>
            <td>{{compra.cantidad}}</td>
            <td>{{compra.precio}}</td>
            <td>
                <button @click="editar(compra)">Editar</button>
                <button @click="eliminar(compra._id)">Eliminar</button>
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">Total: </td>
            <td>{{total}}</td>
        </tr>
    </tfoot>
</table>
</div>
<hr>
<div id="compras--form">
<form action="">
    <input type="text" placeholder="Producto" v-model="form.producto">
    <br>
    <input type="text" placeholder="Usuario" v-model="form.usuario">
    <br>
    <input type="number" placeholder="Cantidad" v-model="form.cantidad">
    <br>
    <input type="number" placeholder="Precio" v-model="form.precio">
    <br>
    <button type="button" @click="guardar()">Guardar</button>
</form>
</div>
</div>
    `
})