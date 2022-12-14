const API   = 'https://crudcrud.com/api/313fe5e029fd4767b0eb1050961e0153'
const RAND_SIZE = 1000000000
const app = new Vue({
    el: '#app',
    data: {
        compras: [],
        form: {
            _id: null, 
            producto: null,
            usuario: null,
            cantidad: 0,
            precio: 0
        },
        total: 0
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
    }
})