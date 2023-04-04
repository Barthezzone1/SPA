const app = Vue.createApp({
    data() {
        return {
            title: '',
            name: '',
            surname: ''
        }
    },
    methods: {
        save(e) {
            e.preventDefault()
            console.log(`Tytuł: ${this.title}, Imię: ${this.name}, Nazwisko: ${this.surname}`)
        }
    }
})
