

const Productos = {
     API   : 'https://crudcrud.com/api/7e636766dbf9407fb482bfe43fdbc231',
     model : '/productos',
     RAND_SIZE : 1000000000,
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
    
const ProductosComponente = Vue.component('productos-component',{
   
    data: function() {
        return{
               productos: [],
                form: {
                    _id: null, 
                    nombre: null,
                    categoria: null,
                    codigo: null
                }
            }
        },
            methods: {
                initForm: function (){
                    this.form = {
                        _id: null, 
                        nombre: null,
                        categoria: null,
                        codigo: null
                    }
                },
                obtenerTodos: function (){
                    Productos.todos( res => {
                        this.productos = res
                        this.initForm()
                    })
                },
                guardar: function (){
                    // Crear producto
                    if(this.form._id === null){
                        const form = {...this.form}
                        delete form._id
                        Productos.crear(form, res => {
                            console.log(res)
                            this.obtenerTodos()
                        })
                    } else {
                        const form = {...this.form}
                        delete form._id
                        Productos.editar(this.form._id, form, res => {
                            console.log(res)
                            this.obtenerTodos()
                        })
                    }
                },
                eliminar: function (_id){
                    Productos.eliminar(_id, res => {
                        console.log(res)
                        this.obtenerTodos()
                    })
                },
                editar: function (producto){
                    this.form = {...producto}
                },
                generarCodigo: function (){
                    const str   = "abcdefghi"
                    const code  = Math.floor(Math.random() * this.RAND_SIZE)
                    let dynCode = ""
                    for (let i = 0; i < str.length; i++){
                        dynCode += str[Math.floor(Math.random() * str.length)]
                    }
                    dynCode = dynCode + code
                    this.form.codigo = dynCode.toUpperCase()
                }
            },
            mounted: function (){
                this.obtenerTodos()
            },

template: `
<div id="productos-component">
<div id="productos--listado">
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Codigo</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(producto, i) in productos" :key="i">
            <td>{{producto._id}}</td>
            <td>{{producto.nombre}}</td>
            <td>{{producto.categoria}}</td>
            <td>{{producto.codigo}}</td>
            <td>
                <button @click="editar(producto)">Editar</button>
                <button @click="eliminar(producto._id)">Eliminar</button>
            </td>
        </tr>
    </tbody>
</table>
</div>
<hr>
<div id="producto--form">
<form action="">
    <input type="text" placeholder="nombre" v-model="form.nombre">
    <br>
    <input type="text" placeholder="Categoria" v-model="form.categoria">
    <br>
    <input type="text" placeholder="Codigo" v-model="form.codigo" readonly disabled>
    <button type="button" @click="generarCodigo()">Generar</button>
    <br>
    <button type="button" @click="guardar()">Guardar</button>
</form>
</div>
</div>
    `
})