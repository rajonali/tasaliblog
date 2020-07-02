import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from  'vue-router';

import Home from "./views/Home.vue"
import Work from "./views/Work.vue"
import Opinion from "./views/Opinion.vue"
import Resources from "./views/Resources.vue"
import Personal from "./views/Personal.vue"



import Login from "./views/auth/Login.vue"
import Register from "./views/auth/Register.vue"


import axios from "axios";
import * as firebase from 'firebase/app';
import "firebase/auth";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCi7obKQ8pTVzU5O2LktPI3T0mNh-pVA4Q",
    authDomain: "tasaliblog.firebaseapp.com",
    databaseURL: "https://tasaliblog.firebaseio.com",
    projectId: "tasaliblog",
    storageBucket: "tasaliblog.appspot.com",
    messagingSenderId: "1011922875461",
    appId: "1:1011922875461:web:6cb501069f870ce63a5f2c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




Vue.prototype.$axios = axios;
Vue.config.productionTip = false

Vue.use(VueRouter);



const routes = [
  {
    path:'/home', component:Home, name:'home', meta:{requiresAuth:true}
  },
  {
    path:'/work', component:Work, name:'work', meta:{requiresAuth:true}
  },
  {
    path:'/personal', component:Personal, name:'personal', meta:{requiresAuth:true}
  },
  {
    path:'/resources', component:Resources, name:'resources', meta:{requiresAuth:true}
  },
  {
    path:'/opinion', component:Opinion, name:'opinion', meta:{requiresAuth:true}
  },
  {
    path:'/login', component:Login, name:'login', 
  },
  {
    path:'/register', component:Register, name:'register'
  },



  
];



const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to,from,next)=> {
  const requiresAuth = to.matched.some(record=>record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;

  if(requiresAuth && !isAuthenticated){
    next('/login');
  }
  else{
 next();
  }
})

let app;

  firebase.auth().onAuthStateChanged(user =>{

    console.log(user);
    if(!app){
      app=new Vue({
  router,
  vuetify,  
  render: h => h(App)
}).$mount('#app')

    }
  })