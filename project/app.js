const App = {
    data() {
        return {
            myPlaceholder: 'внесите что-то в список',
            title: 'Список:',
            inputValue: '',
            notes: ['note1','note2']
        }
    },
    methods: {

        addNewNote () {
            if (this.inputValue !== '') {
            this.notes.push(this.inputValue)
            this.inputValue = ''
            }
        },

        deleteNote(idx, $event) {
            this.notes.splice(idx, 1)
        },

        // inputKeyPress (event) {
            // console.log(event.key)

            // if (event.key == 'Enter') {
            //     this.addNewNote()
            // }
        // }
        // },

        toUpperCase (item) {
            return item.toUpperCase()
        },

        multilpliedCount() {
            console.log('multilpliedCount')
            return this.notes.length * 100
        }
    },
    computed: {
        multilpliedCountComputed() {
            console.log('multilpliedCountComputed')
            return this.notes.length * 200
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = 'не пиши сюда больше'
            }
            console.log('input value changed', value)
        }
    }

}

// const app = Vue.createApp(App)
// app.mount('#app')

Vue.createApp(App).mount('#app')














