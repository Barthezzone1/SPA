const app = Vue.createApp({
    data(){
        return{
            title: 'Receipt',
            separator_1: '---------------------------',
            product: 'Book',
            unit_price: '17 zł',
            quantity: '3',
            amount: '51 zł',
            tax: '23%',
            separator_2: '================',
            total: '62.73 zł'

        }
    }
})