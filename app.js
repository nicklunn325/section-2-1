const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Nick',
            middleName: '',
            lastName: 'Lunn',
            url: 'http://google.com',
            rawUrl: '<a href="https://google.com" target="_blank"> GOOGLE </a>',
            age: 30
        }
    },
    methods: {
        increment() {
            this.age++
        },
        updateLastName(message, event) {
            // .prevent modifier used on event directive instead of event.preventDefault()
            // console.log(message)
            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        }
    },
    computed: {
        fullName() {
            console.log("full name computed property was called")
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        }
    },
    watch: {
        age(newVal, old){
            console.log(`age updated from ${old} to ${newVal}`)
            // setTimeout(()=>{
            //     this.age = 5;
            // },3000)
        }
    }
}).mount('#app')

// setTimeout(() => {
//     vm.firstName = "Archie"
// }, 2000)

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Archie'
//         }
//     }
// }).mount('#app2')