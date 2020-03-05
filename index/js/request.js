const bs = new Vue({
    el: '#book_skoearch',
    data() {
        return {
            query: '',
            items: [],
        }
    },
    methods: {
        getResult(query) {
            axios
                .get('https://www.googleapis.com/books/v1/volumes?q=' + query)
                .then(response => {
                    console.log(response.data.items);
                    this.items = response.data.items;
                });
        }
    }
})
new Vue({
    el: '#book_search',
    data() {
        return {
            search: '',
            items: null,
        }
    },
    methods: {
        getResult(search) {
            axios
                .get('https://www.googleapis.com/books/v1/volumes?q=' + search)
                .then(response => (this.items = response.data.items))
        }
    }
})
