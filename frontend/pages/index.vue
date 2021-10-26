<template>
<div class="main">
  <div class="home-page">
    <button class="register button" @click="signup()">Sign Up</button>
    <button class="login button" @click="login()">Log In</button>
  </div>
</div>
</template>

<script>
  export default {
    methods:{
      signup(){
        this.$router.push('./register')
      },
      login(){
        this.$router.push('./login')
      }
    }
  }
</script>
<style >
  body{
    margin: 0;
    padding: 0;
  }
  .main{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
  }
  .home-page{
    background-color: grey;
    width: 40%;
    height: 30%;
    border-radius:3px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .button{
    cursor: pointer;
    width: 40%;
    height: 20%;
    border-radius: 3px;
    margin: 10px;
    border: none;
  }
  .button:hover{
    font-size: 16px;
    transform: scale(90%);
  }
  .button:active{
    background-color: rgb(230, 132, 5);
  }



</style>
