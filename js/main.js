const app = Vue.createApp({
    data() {
        return {
            km:0,
            m:0.
        }
    },
    computed:{

    },
    watch:{
        km:function (value) {
            this.km = value
            this.m  = value * 1000
        },
        m:function (value){
            this.km = value/1000
            this.m  = value
        }
    },
    methods: {
        
    },

})
app.mount('#app')

