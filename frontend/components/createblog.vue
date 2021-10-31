<template>
    <div class="create-form-wrapper">
        <input type="text" placeholder="Title" class="createtitle" v-model="usertitle">
        <input type="text" placeholder="Describe" class="createdescription" v-model="userdescription">
        <button class="addbtn" @click="addBlog()" type="submit">Add</button>
        <button class="clsbtn" @click="closeAddingBlogPage()">Close</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            usertitle:'',
            userdescription:'',
            closethis:false,
        }
    },
    props:[
    ],
    methods:{
        closeAddingBlogPage(){
            this.$emit('closecreate')
            console.log(this.usertitle);
        },
        addBlog(){
            const bloginfo = {
                Title : this.usertitle,
                Description : this.userdescription
            }
            const headers = {
                // "Authorization": `${localStorage.getItem('authToken')}`
                "Authorization":`Bearer ${localStorage.getItem('authToken')}`,
            }
            //this.$emit('pushThis',this.usertitle ,this.userdescription);
            this.$axios.post('http://localhost:5000/blogs',bloginfo,{headers})
            .then(res =>{
                console.log(res.data);
                this.$emit('pushThis')
            })
            .catch(err =>{
                console.log(err.response.data)
            })
        }
    }
}
</script>





<style>
    .create-form-wrapper{
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
        min-height: 50px;
        align-items: center;
    }
    .addbtn,.clsbtn{
        flex-basis: 10%;
        height: 40px;
        background-color: black;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
    }
    .createtitle{
        flex-basis: 20%;
        background-color: black;
        border: none;
        border-radius: 5px;
        color: white;
        min-height:50px; 
        padding-left:10px
    }
    .createdescription{
        flex-basis: 50%;
        background-color: black;
        border: none;
        border-radius: 5px;
        color: white;
        min-height:50px; 
        padding-left:10px

    }
</style>