<template>
<div>
  <v-container class="grey lighten-5">
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        v-for="post in posts"
        :key="post.message"
      >
        <v-card
    max-width="344"
    class="mx-auto"
  >
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
      height="194"
    ></v-img>

    <v-card-text>
<h1>      {{post.post}}</h1>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-col>
    </v-row>

  </v-container>
</div>
</template>

<script>

export default {

    name: 'FeaturedPosts',
    components:{},
    data() {


        return {
            error: '',
            posts:[
             {post:'post1'},
             {post:'post2'},
             {post:'post3'},
            ],
        }

    },

    methods: {
        //
    }
}
</script>

<style lang="scss" scoped>

</style>
