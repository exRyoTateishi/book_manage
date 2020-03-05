new Vue({
    el: '#request_book',
    data() {
        return {
            items: null,
        }
    },
    mounted() {
        axios
        .get('https://www.googleapis.com/books/v1/volumes?q=ソフトウェアファースト')
        .then(response => (this.items = response.data.items))
    }
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'こんにちは'
    }
})
