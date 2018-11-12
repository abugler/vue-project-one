var project1 = new Vue({
    el: '#project-1',
    data: {
        number: 2,
        sum: number+number,
        output: ""+ number + " + " + number 
        + " = " + sum
    },
    methods:{
        quicmaff: function(){
            this.number= this.number+this.number;
        }
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })