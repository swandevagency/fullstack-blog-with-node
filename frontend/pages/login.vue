<template>
    <div  class="wrapper">
        <div class="login-form">
            <input type="text" v-model="username" placeholder="Username" class="login-fields">
            <input type="password" placeholder="password" v-model="password" class="login-fields">
            <button @click="logIn()" class="loginbtn">Log In</button>
            <h3 class="errmsg" v-if="error">{{errmsg}}</h3>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:'',
            error:false,
            errmsg:''
        }
    },
    methods:{
        logIn(){
            this.$axios.post('http://localhost:5000/login',{
                identifier: this.username,
                password: this.password
            })
            .then(res =>{
                    localStorage.setItem('authToken', res.data.token)
                    localStorage.setItem('username',this.username)
                    this.$router.push('/blogs')
                    console.log(res);
            })
            .catch(err =>{
                this.errmsg= err.response.data
                this.error = true
            })
        }
    }
}
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    .wrapper{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
    }
    .login-form{
        background-color:black;
        width: 40%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .login-fields{
        padding: 5px;
        width: 80%;
        height: 20%;
        border: 2px solid grey;
        font-size: 16px;
    }
    .loginbtn{
        background-color:grey;
        margin-top: 20px;
        width: 25%;
        height: 20%;
        padding: 5px;
        border: none;
        border-radius: 3px;
        font-size: 16px;
        cursor: pointer;
    }
    .loginbtn:hover{
        transform: scale(90%);
    }
    .loginbtn:active{
        background-color: rgb(230, 132, 5);
    }
    .errmsg{
        color: red;
        margin-top: 20px;
    }
</style>