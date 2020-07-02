<template>
<v-app>

    <v-app-bar app color="primary" dark>
        <div class="d-flex align-center">

            <h1>Tas Ali Blog</h1>

        </div>

        <v-spacer></v-spacer>

        <div>

            <span>Logged In:</span> <span v-if="loggedIn">Yes</span> <span v-else>No</span>
        </div>
                <v-spacer></v-spacer>

        <div>
    <v-btn class="danger" @click="signOut">Sign out</v-btn>
    </div>
        <v-spacer></v-spacer>

        <div class="align-center" style="color:white">

            <router-link style="color:white" to="/work">Work</router-link> |
            <router-link style="color:white" to="/opinion">Opinion</router-link> |
            <router-link style="color:white" to="/resources">Resources</router-link> |
            <router-link style="color:white" to="/personal">Personal</router-link>

        </div>

    </v-app-bar>



    
    <v-content>

        <router-view></router-view>
    </v-content>


<Footer />



    
</v-app>
</template>

<script>

import * as firebase from 'firebase/app';
import "firebase/auth";


import Footer from '../components/Footer';


export default {
components:{
    Footer
},

    created(){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.loggedIn=true;
            }
            else{
                this.loggedIn=false;
            }
        })
    },

    data() {
        return {
            loggedIn: false
        }
    },



    methods: {
        async signOut(){
            try {
                const data = await firebase.auth().signOut();
                console.log(data);
                this.$router.replace({name:"login"})
            } catch (error) {
                console.log(error)
            }
        }

    }

}
</script>

<style lang="scss" scoped>

</style>
