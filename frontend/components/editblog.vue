<template>
    <div class="edit-page-wrapper">
        <div class="edit-page">
            <input type="text" class="edited-title" v-model="editedTitle">
            <input type="text" class="edited-description" v-model="editedDescription">
            <!-- <button class="ebtn" @click="testfunc()">Close</button> -->
            <button class="ebtn gubral" @click="saveChanges()">Save Changes</button>
        </div>
    </div>
</template>



<script>
export default {
    data(){
        return{

        }
    },
    props:[
        "editedTitle",
        "editedDescription",
        "editedID"
    ],
    methods:{
        saveChanges(){
            console.log(this.editedID,this.editedDescription,this.editedTitle);
            const bloginfo = {
                Title : this.editedTitle,
                Description : this.editedDescription,
            }
            const headers = {
                // "Authorization": `Bearer ${localStorage.getItem('authToken')}`
                "Authorization":`Bearer ${localStorage.getItem('authToken')}`,
            }
            //this.$axios.put(`http://localhost:1337/blogs/${this.editedID}`,bloginfo,{headers})
            this.$axios.put(`http://localhost:5000/blogs/${this.editedID}`,bloginfo,{headers})
            .then(res =>{
                console.log(res.data)
                this.$emit('savethese')
            })
        },
    }
}
</script>



<style>
    *{
        margin: 0;
        padding: 0;
    }
    .edit-page-wrapper{
        width: 94.5%;
        height: 40vh;
        background-color: black;
        position: fixed;
        top: 30%;
        border: 5px solid white;
    }
    .edit-page{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .edited-title{
        flex-basis: 20%;
        min-height:10% ;
        margin-left: 10px;
        color:rgb(6, 146, 6);
        background-color: black;
        border: none;
        outline: none;

    }
    .edited-description{
        flex-basis: 50%;
        min-height:10% ;
        color:rgb(6, 146, 6);
        background-color: black;
        border: none;
        outline: none;
    }
    .ebtn{
        flex-basis: 10%;
        min-height:10% ;
        color:rgb(6, 146, 6);
        background-color: black;
        border: none;
        cursor: pointer;
        outline: none;
    }
    .gubral{
        margin-right: 10px;
    }
    .gubral:hover{
        border: 2px solid rgb(6, 146, 6);
    }
</style>