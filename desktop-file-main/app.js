const app = Vue.createApp({
  data() {
      return {
          amount: parseInt(localStorage.getItem('likesCount')) || 1,
      }
  },
  methods: {
      increment() {
          this.amount++;
          localStorage.setItem('likesCount', this.amount.toString());
      },
      decrement() {
          if (this.amount > 1) {
              this.amount--;
              localStorage.setItem('likesCount', this.amount.toString());
          }
      }
  }
})
app.mount('#app')