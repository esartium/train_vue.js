Vue.createApp({
     data: () => ({
        title: 'тайтл',
        myHtml: '<h1>заголовок</h1>',
        person: {
            firstName: 'chelik',
            lastName: 'chelikov',
            age: '500'
        },
        items: [1, 2, 3, 4, 5, 6]
    }),
    methods: {
        // stopPropagation(event) {
        //     event.stopPropagation()
        // },
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            console.log(this.$refs.myInput.value)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')