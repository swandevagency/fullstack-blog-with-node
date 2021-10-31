<template>
    <div class="wrapper">
        <h1 class="dearuser">Hello Dear {{dearUser}}</h1>
        <div class="table" @click.self="closeCreatingPage()">
            <div class="table-head">
                <button class="crtbtn" @click="openCreatingPage()">Create blog</button>
            </div>
            <createblog  v-if="letscreate"  @closecreate = "CloseCreatingPageEmited" @pushThis= "pushAddedBlog"   />
            <ul v-for="blog in blogs" :key=blog.id>
                <li>
                    <h2 class="title">{{blog.Title}}</h2>
                    <h4 class="description">{{blog.Description}}</h4>
                    <button class="edit-btn btn" @click="editChosenBlog(blog)">Edit</button>
                    <button class="delete-btn btn" @click="deleteChosenBlog(blog._id)">Delete</button>
                </li>
            </ul>
            <editblog v-if="neededit"  :editedTitle = needEditTitle :editedDescription = needEditDescription   :editedID = needEditID  @savethese = 'saveChangesMade' />
        </div>
        <button class="btn lgoutbtn" @click="logout()">Log Out</button>
    </div>
</template>






<script>
import createblog from '../components/createblog.vue'
import editblog from '../components/editblog.vue'
export default {
    data(){
        return{
            blogs:[],
            letscreate:false,
            neededit:false,
            needEditTitle:'',
            needEditDescription:'',
            needEditID:'',
            dearUser:'',

        }
    },
    components:{
        createblog,
        editblog,
    },
    // async created(){
    //     const gubral = await localStorage.getItem('username')
    //     this.dearUser = gubral
    // },
    async mounted(){
        const key = await localStorage.getItem('authToken')
        if(!key){
            this.$router.push('./')
        }
        const headers ={
            "Authorization":`Bearer ${localStorage.getItem('authToken')}`,
        }
        this.$axios.get('http://localhost:5000/blogs', {headers})
        .then(res =>{
            console.log(res.data)
            console.log(res.data[0])
            this.blogs = res.data
        })
        this.dearUser = localStorage.getItem('username')
    },
    methods:{

        openCreatingPage(){
            this.letscreate = true
        },
        CloseCreatingPageEmited(){
            this.letscreate = false
        },
        closeCreatingPage(){
            this.letscreate = false
            this.neededit = false
        },
        // showNewArray(){
        //     this.$axios.get('http://localhost:1337/blogs',)
        //     .then(res =>{
        //         console.log(res,'called');
        //     })
        // },
         deleteChosenBlog(id){
            console.log(id)
            const headers = {
                 "Authorization":`Bearer ${localStorage.getItem('authToken')}`,
                //"Authorization":`${localStorage.getItem('authToken')}`,
                }
            //this.$axios.delete(`http://localhost:1337/blogs/${id}`,{headers})
             this.$axios.delete(`http://localhost:5000/blogs/${id}`,{headers})
            .then(() =>{
                this.$axios.get('http://localhost:5000/blogs',{headers})
                .then(res =>{
                    this.blogs = res.data
                })
            })
        },
        
        pushAddedBlog(){
            // const myobject = {
            //     id:nid,
            //     title:ntitle,
            //     description:ndescription
            // }
            //this.blogs = this.blogs.push({nid,ntitle,ndescription})
            const headers = {
                "Authorization":`Bearer ${localStorage.getItem('authToken')}`
            }
            this.$axios.get('http://localhost:5000/blogs',{headers})
            .then(res =>{
                this.blogs = res.data
            })
            this.letscreate = false//;;
        },
        editChosenBlog(blog){
            this.neededit = true
            this.needEditTitle = blog.Title
            this.needEditDescription = blog.Description
            this.needEditID = blog._id
            //console.log(this.needEditTitle,this.needEditDescription,this.needEditID);
        },
        saveChangesMade(){
            const headers = {
                "Authorization":`Bearer ${localStorage.getItem('authToken')}`
            }
            this.$axios.get('http://localhost:5000/blogs',{headers})
            .then(res =>{
                this.blogs = res.data
            })
            this.neededit = false
        },
        logout(){
            localStorage.setItem('authToken', '')
            this.$router.push('/login')
        }
    },
}
</script>














<style>
    *{
        margin: 0;
        padding: 0;
    }
    .dearuser{
        color: whitesmoke;
        margin-bottom: 10px;
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
    .table{
        background-color: gray;
        border-radius: 5px;
        width: 95%;
        height: 85%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .crtbtn{
        width: 150px;
        height: 40px;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        cursor: pointer;
        margin-bottom: 40px;
    }
    .crtbtn:active{
        transform: scale(90%);
    }
    ul{
        list-style-type:none;
        width: 100%;
    }
    li{
        margin-top: 5px;
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        border: 2px solid black;
        border-left: none;
        border-right: none;
        min-height: 30px;
    }
    .table-head{
        display: block;;
    }
    .btn{
        flex-basis: 10%;
        cursor: pointer;
        min-height: 40px;
        max-height: 50px;
    }
    .title{
        flex-basis: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .description{
        flex-basis: 50%;
    }
    .lgoutbtn{
        width: 100px;
        margin-top: 10px;
    }

</style>