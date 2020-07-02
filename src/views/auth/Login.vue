<template>
    <div>

LOGIN


<form @submit.prevent="pressed">


    <div class="login">


        <input type="email" placeholder="login" v-model="email">
        <input type="password" v-model="password" placeholder="password">
        <button type="submit">Login</button>
    </div>



</form>


<div class="error" v-if="error">{{error.message</div>
    </div>
</template>

<script>

import * as firebase from "firebase/app";
import "firebase/auth";


    export default {
        data() {
            return {
                email:'',
                password:'',
                error:''
            }
        },
        methods: {
            async pressed(){
                try{
                    const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
                    console.log(val);

                    this.$router.replace({name:'home'})
                }
                catch(error){
                    console.log(error)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>