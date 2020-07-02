<template>
<div>


<v-container fluid fill-height>
    <v-layout justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-toolbar dark flat>
            <v-toolbar-title>Register</v-toolbar-title>
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
                <v-btn color='primary' type="submit">Register</v-btn>
              <v-spacer></v-spacer>

                <v-btn v-on:click="loginPressed">Already registered?</v-btn>
              </v-card-actions>
            </v-form>
            <!-- login form -->
          </v-card-text>
        </v-card>
        <!-- end login view -->
      </v-flex>
    </v-layout>
  </v-container>

    <div class="error" v-if="error"> {{ error.message}} </div>


</div>
</template>

<script>
import * as firebase from 'firebase/app';

import "firebase/auth";

export default {
    data() {
        return {
            error: "",
            email: "",
            password: ""
        }

    },
    methods: {


        loginPressed() {
            this.$router.replace({name:'login'})
        },
        async pressed() {

            try {
                const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
                const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
                console.log(val);
                this.$router.replace({
                    name: 'home'
                });
                console.log(user);
            } catch (error) {
                console.log(error);
            }

        }
    }
}
</script>

<style lang="scss" scoped>

</style>
