const Menu = Vue.component('menu-component', {
    data: function (){
        return {
            apps: [
                {
                    name: "Compras",
                    app: 0
                },
                {
                    name: "Productos",
                    app: 1
                },
                {
                    name: "Usuarios",
                    app: 2
                },

            ]
        }
    },
    methods: {
        changeAppTrigger: function (appNumber){
            // app: hace referencia a la app de Vue
            app.changeApp(appNumber)
        }
    },
    template: `
        <ul id="menu-component">
            <li v-for="item in apps">
                <a href="#" @click="changeAppTrigger(item.app)">{{item.name}}</a>
            </li>
        </ul>
    `
})