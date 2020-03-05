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
<<<<<<< HEAD
    }
})
=======
    },
});
>>>>>>> a24320f2d13101fa985a5498774eb0240e05a06b
