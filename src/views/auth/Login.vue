<template>
        <div>

<v-container fluid fill-height>
    <v-layout justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-toolbar dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="pressed">
              <v-text-field
                v-model="email"
                id='email'
                name='email'
                label='email'
                type='email'
                required>
              </v-text-field>
              <v-text-field
                v-model='password'
                id='password'
                label='Password'
                type='password'
                required>
              </v-text-field>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn color='primary' type="submit">Login</v-btn>
              <v-spacer></v-spacer>

                <v-btn v-on:click="registerPressed">Need to register?</v-btn>
              </v-card-actions>
            </v-form>
            <!-- login form -->
          </v-card-text>
        </v-card>
        <!-- end login view -->
      </v-flex>
    </v-layout>
  </v-container>



<div class="error" v-if="error">{{error.message}}</div>
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
                error:'',
                loggedIn: false,

            }
        },
        methods: {

            registerPressed(){
                try{
                    this.$router.replace({name:'register'})
                }
                catch(error) {
                    console.log(error);
                }
            },
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