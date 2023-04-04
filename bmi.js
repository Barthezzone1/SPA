const app = Vue.createApp({
    data() {
        return {
            height: 0,
            weight: 0
        }
    },
    computed: {
        bmi() {
            return this.weight / Math.pow(this.height/100, 2)
        }
    }
})
