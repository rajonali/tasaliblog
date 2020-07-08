<template>

    <v-container>


    
<Post />
<br />
<Post />
<br />
<Post />
<br />
<Post />
<br />
<Post />
<br />
<Post />
<br />

<v-navigation-drawer outlined absolute permanent left style="padding-top:75px;">
      


<v-col

          >

              <v-text-field
            label="🔎"
            solo
            background-color="white"
            color="black"
          ></v-text-field>

   <v-divider style="background-color:white"
            ></v-divider>     
                 </v-col>


      


<v-col style="padding-left:20">
          <h1 class="sidebar-h1">Recent Posts</h1>
<div
       v-for="feed in feeds" :key="feed.name">
        <span class="sidebar-text"></span> <a class="sidebar-text">📌  {{feed.name}}</a>
      </div> 

      </v-col>



<v-col>
         <h1 class="sidebar-h1">Categories</h1>

<span          v-for="item in items"
          :key="item.tagname"
          link style=""
        >
      
   <strong>  <v-chip
      class="ma-2"
      color="blue"
      label
      text-color="white"
    >
      <v-icon left>mdi-label</v-icon>
      {{item.tagname}}
    </v-chip></strong>
    
     
            </span>
    </v-col>


<v-col>


<h1 class="sidebar-h1">Archives</h1>
<a v-for="month in months" :key="month.text">

    <ul class="sidebar-text">{{month.text}}<br /></ul>
    </a>



</v-col>

<br />
            <v-spacer></v-spacer>

<v-col style="display:flex; flex-direction:row; justify-content:space-around; align-items:center">
 <v-icon
        large
        left
        color="blue"
      >
        mdi-twitter
      </v-icon>

       <v-icon
        large
        left
        color="orange"
      >
        mdi-rss
      </v-icon>
       <v-icon
        large
        left
        color="red"
      >
        mdi-email
      </v-icon>
</v-col>
<v-spacer />  

<br />
    <v-col>
        
        
                     <center>   <v-btn v-if="loggedIn" color="#fee17b" style="color:black" @click="signOut"><strong>Logout</strong></v-btn></center>

</v-col> 

    </v-navigation-drawer>



    </v-container>





</template>

<script>

import Post from '../components/Post';
import * as firebase from 'firebase/app';
import "firebase/auth";


export default {
components:{
Post
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
            months:[{text:'January 2020'},{text:'February 2020'},{text:'March 2020'}, {text:'April 2020'}, {text:'May 2020'}, {text:'June 2020'}, {text:'July 2020'}],
                items:[{tagname:'INFOSEC'}, {tagname:'0day'}, {tagname:'xyz'}, {tagname:'drone'}],
    error:'',
    feeds: [{name:'Linux Methodology'}, {name:'2020 Best GPUs'}, {name:'How to Setup IRC'}],
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
        }

    }

}
</script>

<style lang="scss" scoped>


.sidebar-h1 {
    color:black
}


.sidebar-text {
    color:black
}
</style>
