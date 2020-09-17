new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        word: "",
        collection: "",
        words: []
    },
    methods: {
        save() {
            console.log(this.word.toString())
            this.words.push(this.word)
        },
        show() {
            this.collection = this.words   
        },
        clear() {
            this.words = []
            console.log(this.words.toString())
            this.collection = ""
        }
    }
})