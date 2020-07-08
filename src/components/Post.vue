<template>
 <v-card style="border-left: 5px solid #fee17b !important"
    class="mx-auto"
    
  >
    <v-card-title>
      
      <span class="title font-weight-bold"><h2>{{title}}</h2></span>
    </v-card-title>

    <v-card-text class="headline font-weight-light">
{{body}}    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">By {{author}} <span class="font-weight-light"> | {{timeCreated}}</span></v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {


    name: 'Post',
    data() {
        return {
            error: '',
            title: 'How To Make a Blog Using Vue.js',
            body: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni',
            author: 'Tas Ali',
            timeCreated : new Date().toLocaleString()
        }

    },

    methods: {
        //
    }
}
</script>

<style lang="scss" scoped>

</style>
