<template>
  <v-container>
    <h1>{{`Welcome to ${$appName}`}}</h1>
    <h1>{{$sayHelloTo("Hamza")}}</h1>
    <h1>{{getUser}}</h1>
    <h1>{{name | capitalize}}</h1>
    <h1>{{$moment().format("DD : MMM : YYYY")}}</h1>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data:()=>({
    name : 'hamza',
    users :[
      {name: 'Hamza', blocked: true},
      {name: 'Basit', blocked: false},
      {name: 'Asim', blocked: true},
      {name: 'Azhar', blocked: false},
    ]
  }),
  created(){
    console.log(process.env.NUXT_API_URL);
  },
  computed:{
    getUser(){
      return _.filter(this.users, (user)=>{return !user.blocked})
    },
  }

}
</script>
