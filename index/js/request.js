const vm = new Vue({
    el: '#book_search',
    data() {
        return {
            query: '',
            items: [],
        }
    },
    methods: {
        getResult(query) {
            axios
                .get("https://www.googleapis.com/books/v1/volumes?q=search" + query)
                .then(response => {
                    console.log(response.data);
                    this.items = response.data.items;
                });
        }
    }
});
