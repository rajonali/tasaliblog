<template>

<div>


<Sidebar />
<FeaturedPosts />
<PaginatedPosts />


</div>







</template>

<script>


import FeaturedPosts from '../components/FeaturedPosts';
import PaginatedPosts from '../components/PaginatedPosts';

import Sidebar from '../components/Sidebar';





export default {
  name: 'Home',

  components: {
    FeaturedPosts,
    PaginatedPosts,
    Sidebar,
  },

  data: () => ({
    //
  }),
};
</script>
            error:'',
            title:'',
            body:'',
            author:'',
