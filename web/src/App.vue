<template>
    <NavBar />
  <router-view/>
</template>

<script>
  // import $ from 'jquery';
  // import {ref} from 'vue';
  import NavBar from './components/NavBar.vue'
  import "bootstrap/dist/css/bootstrap.min.css"
  import "bootstrap/dist/js/bootstrap"
  // import $ from 'jquery'
// import { error } from 'jquery';

  export default{
    components: {
      NavBar
    },
    setup() {
      // $.ajax({
      //   url: "http://localhost:3000/user/account/token/",
      //   type: "post",
      //   data: {
      //     username: 'll',
      //     password: "pll",
      //   },
      //   success(resp) {
      //     console.log(resp);
      //   },
      //   error(resp) {
      //     console.log(resp);
      //   }
      // });

      // $.ajax({
      //   url: "http://localhost:3000/user/account/info/",
      //   type: "get",
      //   headers: {
      //     Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0MjJkYTA5OTBkYWE0ZjFlYTY2Y2Q1MmUyZTY3ZTQ2ZiIsInN1YiI6IjIiLCJpc3MiOiJzZyIsImlhdCI6MTczNDQxNzY1NiwiZXhwIjoxNzM1NjI3MjU2fQ.qUsCEI6HdAzN8vWPXJWAUD8ql3ZdFQtivzMYjUrsp_k"
      //   },
      //   success(resp) {
      //     console.log(resp);
      //   },
      //   error(resp) {
      //     console.log(resp);
      //   }
      // });

      // $.ajax({
      //   url: "http://localhost:3000/user/account/register/",
      //   type: "post",
      //   data: {
      //     username: "cc",
      //     password: "pcc",
      //     confirmedPassword: "pcc",
      //   },
      //   success(resp) {
      //     console.log(resp);
      //   },
      //   error(resp) {
      //     console.log(resp);
      //   }
      // })

    }
  }
</script>


<style>
body{
  background-image: url("@/assets/images/background.png");
  background-size: cover;
}
</style>
