<template>

    <v-app-bar app color="blue">
        <div class="d-flex align-center">

            <router-link to="home" style="text-decoration: none"><h1 style="color:white">🛸 tasali.io </h1></router-link>

        </div>

        <v-spacer></v-spacer>

     
        <div style="display:flex;flex-direction:row;align-items:space-between;justify-content:space-between">

            <div style="width:90px"><router-link style="color:white" to="/work"><v-btn color="#fee17b" style="color:black"><strong>Work</strong></v-btn></router-link>	</div>
<div style="width:110px">            <router-link style="color:white" to="/opinion"><v-btn color="#fee17b" style="color:black"><strong>Opinion</strong></v-btn></router-link>	</div>
<div style="width:135px">            <router-link style="color:white" to="/resources"><v-btn color="#fee17b" style="color:black"><strong>Resources</strong></v-btn></router-link>	 </div>
<div>            <router-link style="color:white" to="/personal"><v-btn color="#fee17b" style="color:black"><strong>Personal</strong></v-btn></router-link></div>

<span>              <v-btn
      class="ma-2"
      color="red"
      text-color="white"
    v-if="!loggedIn" @click="redirectLogin">Login</v-btn> </span>

             


        </div>

    </v-app-bar>




    



    
</template>

<script>

import * as firebase from 'firebase/app';
import "firebase/auth";




export default {
components:{
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
            loggedIn: false,
                items:[{tagname:'python, node-js, java, c++, vue, microcontrollers, fpga, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet est eleifend mauris ultricies '}],
    error:'',
    feeds: [{name:'computer-science'}, {name:'electrical-engineering'}],
    username:'tasali01'
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
        },


        redirectLogin(){
            try{
                this.$router.replace({name:'login'})
            }
            catch(error){
                console.log(error);
            }
        }

    }

}
</script>

<style lang="scss" scoped>


.sidebar-h1 {
    color:white
}


.sidebar-text {
    color:white
}
</style>
