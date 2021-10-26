<template>
    <div class="wrapper">
        <div class="register-form">
            <input type="text" placeholder="Username" v-model="username" class="register-field">
            <input type="password" placeholder="Password" v-model="password" class="register-field">
            <input type="password" placeholder="Confirm password" v-model="confpass" class="register-field">
            <input type="Email" placeholder="E-mail" v-model="email" class="register-field">
            <button @click="register()" class="regbtn">Register</button> 
            <h3 class="errmsg" v-if="emptyfields">Please Insert All Fields</h3>
            <h3 class="errmsg" v-if="notmatchpass">Not Match Passwords</h3>
            <h3 class="errmsg" v-if="error">{{bckenderrmsg}}</h3>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            password:'',
            confpass:'',
            email:'',
            emptyfields: false,
            notmatchpass: false,
            bckenderrmsg:'',
            error:false,
        }
    },
    methods:{
        register(){

            if(!this.username || !this.password || !this.confpass || !this.email){
                this.emptyfields = true
                this.notmatchpass = false
                return
            }

            if(this.password !== this.confpass){        
                this.emptyfields = false
                this.notmatchpass = true
                return
            }

            const info = {
                username : this.username,
                password : this.password,
                email : this.email,
                confirmed : true
            }
            console.log(info)


// the blow block of code was for checking how app.req('route') works like sending same request more than once in a single page in our backend (like here both sent to index.js)
            
            // this.$axios.get('http://localhost:5000',)
            // .then(res =>{
            //     console.log(res);
            // })


            // this.$axios.get('http://localhost:5000/start',)
            // .then(res =>{
            //     console.log(res.data);
            // })






            this.$axios.post('http://localhost:5000/register',info)
            
            .then(res =>{
                if(res.status === 200){
                   this.$router.push('/login')   
                    console.log(res)
                }
            })




            .catch(err =>{
                console.log(err);
                this.emptyfields = false
                this.notmatchpass = false
                this.error = true
                this.bckenderrmsg = err.response.data
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
    .register-form{
        background-color:black;
        width: 40%;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .register-field{
        padding: 5px;
        width: 80%;
        height: 20%;
        border: 2px solid grey;
        font-size: 16px;
    }
    .regbtn{
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
    .regbtn:hover{
        transform: scale(90%);
    }
    .regbtn:active{
        background-color: rgb(230, 132, 5);
    }
    .errmsg{
        color: red;
        margin-top: 20px;
    }
</style>